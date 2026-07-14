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
  gclid?: string;        // Google click ID (for offline conversion import)
  wbraid?: string;       // Google click ID (app/web, iOS)
  gbraid?: string;       // Google click ID (app/web)
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

// Pipeline + stage IDs for the Fence Sales pipeline
const PIPELINE_ID = 'DqLZHRBvcSW50Gov4OPE';
const STAGE_NEW_LEAD = '5ff68988-dc04-4a47-a183-3272fd20fd74';

// Owner contact ID — Andri Ramírez. Internal notifications (SMS + email)
// are sent to this contact whenever a new web lead arrives.
const OWNER_CONTACT_ID = '0LhuwxcUOlVgcAUqAqB7';

// Approximate monetary value per fence size (used for opportunity.monetaryValue)
function estimateValue(size?: string, fenceType?: string): number {
  // Conservative midpoint estimates from business.ts price ranges.
  // Form sends ranges; map them to small / medium / large / xl tiers.
  const base: Record<string, { small: number; medium: number; large: number; xl: number }> = {
    vinyl_privacy: { small: 4500, medium: 7500,  large: 11000, xl: 14500 },
    vinyl_picket:  { small: 4000, medium: 6500,  large: 9500,  xl: 12500 },
    aluminum:      { small: 4500, medium: 7000,  large: 10500, xl: 14000 },
    dura_fence:    { small: 5000, medium: 8500,  large: 12000, xl: 16000 },
    pool_fence:    { small: 4500, medium: 7000,  large: 10500, xl: 14000 },
  };
  const t = (fenceType || 'vinyl_privacy').toLowerCase().replace(/-/g, '_');
  const s = (size || '').toLowerCase().replace(/\s/g, '');

  let sizeKey: 'small' | 'medium' | 'large' | 'xl' = 'medium';
  if (s.startsWith('<100') || s.includes('small')) sizeKey = 'small';
  else if (s.startsWith('100-200') || s.includes('medium')) sizeKey = 'medium';
  else if (s.startsWith('200-400') || s.includes('large')) sizeKey = 'large';
  else if (s.startsWith('400+') || s.includes('xl')) sizeKey = 'xl';

  return base[t]?.[sizeKey] ?? base.vinyl_privacy[sizeKey];
}

// Map size selection to approximate linear feet.
// Form sends ranges like '<100ft', '100-200ft', '200-400ft', '400+ft'.
// Also accepts 'small', 'medium', 'large' or a raw integer for backward compat.
function sizeToLinearFeet(size?: string): number | undefined {
  if (!size) return undefined;
  const s = size.toLowerCase().replace(/\s/g, '');
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  if (s.startsWith('<100')) return 80;
  if (s.startsWith('100-200')) return 150;
  if (s.startsWith('200-400')) return 300;
  if (s.startsWith('400+')) return 500;
  if (s.includes('small')) return 80;
  if (s.includes('medium')) return 150;
  if (s.includes('large')) return 300;
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
  // Persist Google click IDs so a sold lead can be matched back to the ad
  // click for offline conversion import.
  const clickId = body.gclid || body.wbraid || body.gbraid;
  if (clickId) notesParts.push(`Google Click ID: ${clickId}`);
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

  // UPSERT, not create. GHL rejects a plain POST /contacts/ with 400 when the
  // email or phone already exists ("duplicated contact"), which meant any
  // returning customer — or anyone who submitted the form twice — lost their
  // lead. /contacts/upsert creates the contact or updates the existing one.
  const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
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

  const contactId: string | undefined = (ghlData as any)?.contact?.id;

  // ── 2nd call: create an opportunity in the Fence Sales pipeline ──
  // Failure here doesn't abort the lead — the contact is already saved,
  // and Andri can create the opportunity manually if needed.
  let opportunityId: string | undefined;
  if (contactId) {
    const oppName = `${firstName || 'New Lead'} ${lastName || ''} — ${fenceLbl || 'Fence'}`.trim();
    const oppPayload = {
      pipelineId: PIPELINE_ID,
      pipelineStageId: STAGE_NEW_LEAD,
      locationId: env.GHL_LOCATION_ID,
      name: oppName,
      status: 'open',
      contactId,
      monetaryValue: estimateValue(body.size, body.fence_type),
      source: 'Website Form',
    };
    const oppRes = await fetch('https://services.leadconnectorhq.com/opportunities/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GHL_PIT}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(oppPayload),
    });
    const oppData = await oppRes.json().catch(() => ({}));
    if (oppRes.ok) {
      opportunityId = (oppData as any)?.opportunity?.id;
    }
  }

  // ── 3rd call: internal notification to Andri (SMS + Email) ──
  // Send both in parallel; failures don't abort the response.
  const leadName    = `${firstName || ''} ${lastName || ''}`.trim() || '(no name)';
  const leadPhone   = phone || '(no phone)';
  const leadEmail   = body.email || '(no email)';
  const leadAddress = body.address || '(no address)';
  const leadNotes   = body.notes || '(no notes)';
  const valueUsd    = estimateValue(body.size, body.fence_type);

  const smsBody = `🚨 NEW LEAD — ${leadName}
${fenceLbl || 'Fence'} · ~$${valueUsd.toLocaleString()}
📞 ${leadPhone}
📍 ${leadAddress}
${linearFt ? `📏 ~${linearFt} ft` : ''}
Call within 2hrs for highest conversion.`;

  const emailHtml = `<!DOCTYPE html>
<html><body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5ed;">
  <div style="background: white; padding: 28px; border-top: 6px solid #136229;">
    <h1 style="color: #134529; margin: 0 0 8px; font-size: 24px;">🚨 New Website Lead</h1>
    <p style="color: #62522E; margin: 0 0 24px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong>Estimated value: $${valueUsd.toLocaleString()}</strong></p>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 8px 0; color: #62522E; width: 130px;"><strong>Name:</strong></td><td style="padding: 8px 0; color: #134529;">${leadName}</td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${leadPhone}" style="color: #136229;">${leadPhone}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${leadEmail}" style="color: #136229;">${leadEmail}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>Address:</strong></td><td style="padding: 8px 0; color: #134529;">${leadAddress}</td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>Fence Type:</strong></td><td style="padding: 8px 0; color: #134529;"><strong>${fenceLbl || 'Not specified'}</strong></td></tr>
      ${linearFt ? `<tr><td style="padding: 8px 0; color: #62522E;"><strong>Linear feet:</strong></td><td style="padding: 8px 0; color: #134529;">~${linearFt} ft</td></tr>` : ''}
      ${body.timeline ? `<tr><td style="padding: 8px 0; color: #62522E;"><strong>Timeline:</strong></td><td style="padding: 8px 0; color: #134529;">${body.timeline}</td></tr>` : ''}
    </table>

    <div style="background: #faf6ed; padding: 16px; border-left: 4px solid #D1B487;">
      <strong style="color: #62522E; display: block; margin-bottom: 6px;">Notes:</strong>
      <span style="color: #134529; white-space: pre-wrap;">${leadNotes}</span>
    </div>

    <div style="margin-top: 28px; padding: 16px; background: #136229; text-align: center;">
      <a href="https://app.gohighlevel.com/v2/location/${env.GHL_LOCATION_ID}/contacts/detail/${contactId || ''}" style="color: #D1B487; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px;">→ Open lead in CRM</a>
    </div>

    <p style="color: #62522E; font-size: 12px; margin-top: 24px; text-align: center;">⏱️ <strong>Call within 2 hours</strong> for highest conversion rate.</p>
  </div>
</body></html>`;

  const sendInternal = async (type: 'SMS' | 'Email') => {
    const payload: Record<string, unknown> = {
      type,
      contactId: OWNER_CONTACT_ID,
    };
    if (type === 'SMS') {
      payload.message = smsBody;
    } else {
      payload.subject = `🚨 NEW LEAD: ${leadName} — ${fenceLbl || 'Fence'} ($${valueUsd.toLocaleString()})`;
      payload.html = emailHtml;
    }
    return fetch('https://services.leadconnectorhq.com/conversations/messages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GHL_PIT}`,
        Version: '2021-04-15',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(() => null);
  };

  // Fire both in parallel — don't block the user response on these
  await Promise.all([sendInternal('SMS'), sendInternal('Email')]);

  return new Response(
    JSON.stringify({ ok: true, contactId, opportunityId }),
    { status: 200, headers: CORS_HEADERS },
  );
};


