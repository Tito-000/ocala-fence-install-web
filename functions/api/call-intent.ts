/**
 * Cloudflare Pages Function: POST /api/call-intent
 *
 * Records that a visitor who arrived from Google Ads tapped "call" or
 * "WhatsApp" without ever submitting the form.
 *
 * Why this exists: the Google click id only survives in the browser. Someone
 * who taps the phone number and closes a $14,500 job on that call is invisible
 * to Google — there is nothing to send back when the deal is marked Won,
 * because the click id was never stored anywhere. This endpoint stores it
 * against a contact at the moment of the tap, so the existing GHL workflow
 * ("Google Ads · Venta Ganada") can attribute the sale like any other lead.
 *
 * The contact is deliberately minimal: no name, no phone (we don't have them
 * yet — they are about to call US). It carries the click id and a tag so Andri
 * can tell these apart from real form leads in the CRM.
 *
 * It also opens an opportunity in the same Fence Sales pipeline. A loose
 * contact would force Andri to hunt for it and merge by hand when the call
 * comes in; a card in the pipeline is the thing he already works with — he
 * renames it when he picks up, or deletes it if the call never came.
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   - GHL_PIT          — Private Integration Token (pit-...)
 *   - GHL_LOCATION_ID  — Sub-account location ID
 */

interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
}

// Same pipeline the form leads land in — Andri works one board, not two.
const PIPELINE_ID = 'DqLZHRBvcSW50Gov4OPE';
const STAGE_NEW_LEAD = '5ff68988-dc04-4a47-a183-3272fd20fd74';

// Assigning to Andri is what makes the LeadConnector app push a phone alert.
const ANDRI_USER_ID = 'a68jBTuZPJMbEXzuCimz';

interface CallIntentPayload {
  gclid?: string;
  source?: string; // 'phone_click' | 'whatsapp_click'
  page?: string;
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
    return new Response(JSON.stringify({ ok: false, error: 'GHL credentials not configured' }), {
      status: 500,
      headers: CORS_HEADERS,
    });
  }

  let body: CallIntentPayload;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid body' }), {
      status: 400,
      headers: CORS_HEADERS,
    });
  }

  // No click id, nothing to attribute. Silently accept so the browser never
  // sees an error while the dialer is opening.
  if (!body.gclid) {
    return new Response(JSON.stringify({ ok: true, skipped: 'no gclid' }), {
      status: 200,
      headers: CORS_HEADERS,
    });
  }

  const isWhatsApp = body.source === 'whatsapp_click';
  const channel = isWhatsApp ? 'WhatsApp' : 'Phone';

  // The click id doubles as the contact key: the same visitor tapping call on
  // two pages upserts onto one contact instead of creating duplicates. The
  // address is unroutable by design (RFC 2606 .invalid) — it must never be
  // mistaken for a real inbox or receive mail.
  const syntheticEmail = `gclid-${body.gclid.slice(0, 40).toLowerCase()}@call-intent.invalid`;

  const localTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  const ghlPayload = {
    locationId: env.GHL_LOCATION_ID,
    firstName: `📞 Incoming ${channel}`,
    lastName: `— ${localTime}`,
    email: syntheticEmail,
    source: `Website ${channel} Click`,
    tags: ['source: website', `intent: ${isWhatsApp ? 'whatsapp' : 'call'}`, 'no form submitted'],
    attributionSource: { gclid: body.gclid },
    customFields: [
      {
        id: 'mWKpv4wattfdSUPwLSEF', // Estimate Notes
        value:
          `Tapped ${channel} on the website without filling the form.\n` +
          `Page: ${body.page || '(unknown)'}\n` +
          `When: ${localTime} (Ocala time)\n\n` +
          `Came from a Google ad. Rename this card with their real name and ` +
          `number when you pick up — then work it like any other lead. If the ` +
          `call never came, delete it.\n\n` +
          `Google Click ID: ${body.gclid}`,
      },
    ],
  };

  const ghlHeaders = {
    Authorization: `Bearer ${env.GHL_PIT}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: ghlHeaders,
      body: JSON.stringify(ghlPayload),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error('CALL INTENT UPSERT FAILED', JSON.stringify(data));
      return new Response(JSON.stringify({ ok: false, upstream: data }), {
        status: 502,
        headers: CORS_HEADERS,
      });
    }

    const contactId: string | undefined = (data as any)?.contact?.id;

    // Assign to Andri so his phone lights up. /contacts/upsert accepts
    // `assignedTo` but never applies it, so it needs its own PUT.
    // Best-effort: a failed assignment must not cost the card.
    if (contactId) {
      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}`, {
        method: 'PUT',
        headers: ghlHeaders,
        body: JSON.stringify({ assignedTo: ANDRI_USER_ID }),
      }).catch(() => null);
    }

    // The card is the whole point — a loose contact would just sit there
    // unnoticed. monetaryValue stays 0: we have no idea what they want yet,
    // and a made-up number would poison the pipeline totals.
    let opportunityId: string | undefined;
    if (contactId) {
      const oppRes = await fetch('https://services.leadconnectorhq.com/opportunities/', {
        method: 'POST',
        headers: ghlHeaders,
        body: JSON.stringify({
          pipelineId: PIPELINE_ID,
          pipelineStageId: STAGE_NEW_LEAD,
          locationId: env.GHL_LOCATION_ID,
          name: `📞 Incoming ${channel} — ${localTime}`,
          status: 'open',
          contactId,
          monetaryValue: 0,
          source: `Website ${channel} Click`,
        }),
      });
      const oppData = await oppRes.json().catch(() => ({}));
      if (oppRes.ok) {
        opportunityId = (oppData as any)?.opportunity?.id ?? (oppData as any)?.id;
      } else {
        console.error('CALL INTENT OPP FAILED', JSON.stringify(oppData));
      }
    }

    return new Response(
      JSON.stringify({ ok: true, contactId, opportunityId }),
      { status: 200, headers: CORS_HEADERS },
    );
  } catch (e) {
    console.error('CALL INTENT ERROR', e instanceof Error ? e.message : String(e));
    return new Response(JSON.stringify({ ok: false, error: 'network error' }), {
      status: 502,
      headers: CORS_HEADERS,
    });
  }
};
