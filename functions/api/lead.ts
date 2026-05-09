/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Receives a lead from the /free-estimate form and creates a contact in
 * GoHighLevel via the Private Integration Token (PIT) — kept server-side
 * so it never reaches the browser.
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   - GHL_PIT          — Private Integration Token (pit-...)
 *   - GHL_LOCATION_ID  — Sub-account location ID
 */

interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
}

interface LeadPayload {
  full_name?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  fence_type?: string;   // 'vinyl_privacy' | 'vinyl_picket' | 'aluminum' | 'dura_fence' | 'pool_fence' | 'not_sure'
  size?: string;         // 'small' | 'medium' | 'large' | string with linear feet
  timeline?: string;     // 'asap' | '1-3_months' | '3-6_months' | 'just_browsing'
}

const FENCE_LABELS: Record<string, string> = {
  vinyl_privacy: 'Vinyl Privacy',
  vinyl_picket:  'Vinyl Picket',
  aluminum:      'Aluminum',
  dura_fence:    'Dura Fence',
  durafence:     'Dura Fence',
  pool_fence:    'Pool Fence',
  not_sure:      'Not Sure',
};

// Custom field IDs (provisioned via API in this sub-account)
const CF = {
  fenceType:     'Y2wgrZQQpUIjYSqomjuc', // SINGLE_OPTIONS
  linearFeet:    'fd2981zSCYkR6Zm6gIeI', // NUMERICAL
  propertyType:  'HBL6fkRbP7jLcPcQmdh6', // SINGLE_OPTIONS
  howHeard:      '1LbjV1puVg5ldktoekTP', // SINGLE_OPTIONS
  estimateNotes: 'mWKpv4wattfdSUPwLSEF', // LARGE_TEXT
};

// Map size selection to approximate linear feet
function sizeToLinearFeet(size?: string): number | undefined {
  if (!size) return undefined;
  const s = size.toLowerCase();
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  if (s.includes('small')) return 80;
  if (s.includes('medium')) return 150;
  if (s.includes('large')) return 250;
  return undefined;
}

// Split full name into first/last
function splitName(full?: string): { firstName: string; lastName: string } {
  if (!full) return { firstName: '', lastName: '' };
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

// Normalize a US-style phone to E.164. Defaults to +1 country code.
function normalizePhone(phone?: string): string {
  if (!phone) return '';
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (phone.startsWith('+')) return phone;
  return `+${digits}`;
}

// Extract a 5-digit US ZIP from a free-text address (e.g. "Ocala area — ZIP 34471")
function extractZip(address?: string): string | undefined {
  if (!address) return undefined;
  const m = address.match(/\b(\d{5})(?:-\d{4})?\b/);
  return m ? m[1] : undefined;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: CORS_HEADERS });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.GHL_PIT || !env.GHL_LOCATION_ID) {
    return new Response(
      JSON.stringify({ ok: false, error: 'GHL credentials not configured' }),
      { status: 500, headers: CORS_HEADERS },
    );
  }

  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: 'Invalid JSON body' }),
      { status: 400, headers: CORS_HEADERS },
    );
  }

  // Minimum: phone or email
  if (!body.phone && !body.email) {
    return new Response(
      JSON.stringify({ ok: false, error: 'phone or email is required' }),
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const { firstName, lastName } = splitName(body.full_name);
  const phone     = normalizePhone(body.phone);
  const fenceLbl  = body.fence_type ? FENCE_LABELS[body.fence_type] || body.fence_type : undefined;
  const linearFt  = sizeToLinearFeet(body.size);
  const zip       = extractZip(body.address);

  // Tags from form
  const tags: string[] = ['source: website', 'hot lead'];
  if (fenceLbl) tags.push(fenceLbl.toLowerCase());

  // Compose notes (timeline + free-text)
  const notesParts: string[] = [];
  if (body.timeline) notesParts.push(`Timeline: ${body.timeline}`);
  if (body.notes)    notesParts.push(body.notes.trim());
  const fullNotes = notesParts.join('\n\n');

  // Build customFields array (only fields we have a value for)
  const customFields: { id: string; value: string | number }[] = [];
  if (fenceLbl)  customFields.push({ id: CF.fenceType, value: fenceLbl });
  if (linearFt)  customFields.push({ id: CF.linearFeet, value: linearFt });
  if (fullNotes) customFields.push({ id: CF.estimateNotes, value: fullNotes });

  const ghlPayload: Record<string, unknown> = {
    locationId: env.GHL_LOCATION_ID,
    firstName,
    lastName,
    email: body.email || undefined,
    phone: phone || undefined,
    address1: body.address || undefined,
    postalCode: zip,
    source: 'Website Form',
    tags,
    customFields,
  };

  // Strip undefined values
  for (const k of Object.keys(ghlPayload)) {
    if (ghlPayload[k] === undefined || ghlPayload[k] === '') delete ghlPayload[k];
  }

  const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GHL_PIT}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ghlPayload),
  });

  const ghlData = await ghlRes.json().catch(() => ({}));

  if (!ghlRes.ok) {
    return new Response(
      JSON.stringify({ ok: false, error: 'GHL upstream error', upstream: ghlData }),
      { status: 502, headers: CORS_HEADERS },
    );
  }

  return new Response(
    JSON.stringify({ ok: true, contactId: (ghlData as any)?.contact?.id }),
    { status: 200, headers: CORS_HEADERS },
  );
};

