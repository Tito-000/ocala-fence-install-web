/**
 * Cloudflare Pages Function: POST /api/call-intent
 *
 * Records that a visitor who arrived from Google Ads tapped "call", "WhatsApp"
 * or the email link without ever submitting the form.
 *
 * Why this exists: the Google click id only survives in the browser. Someone
 * who taps the phone number and closes a $14,500 job on that call is invisible
 * to Google — there is nothing to send back when the deal is marked Won,
 * because the click id was never stored anywhere. This endpoint stores it
 * against a contact at the moment of the tap, so the existing GHL workflow
 * ("Google Ads · Venta Ganada") can attribute the sale like any other lead.
 *
 * The contact is deliberately minimal: no name, no phone (we don't have them
 * yet — they are about to reach out to US). It carries the click id and a tag
 * so Andri can tell these apart from real form leads in the CRM.
 *
 * It also opens an opportunity in the same Fence Sales pipeline. A loose
 * contact would force Andri to hunt for it and merge by hand when they reach
 * out; a card in the pipeline is the thing he already works with — he renames
 * it when they do, or deletes it if they never did.
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

// Same inboxes that get the form-lead alert. The app notification only fires
// if Andri has LeadConnector installed with notifications on — email is the
// path that always works. Kept in sync with lead.ts on purpose.
const ALERT_EMAILS = [
  'ocalafenceinstall@gmail.com',
  'crystallinedynamicsinc@gmail.com',
  'martinmercedes100@gmail.com',
];

interface CallIntentPayload {
  gclid?: string;
  source?: string; // 'phone_click' | 'whatsapp_click' | 'click_email'
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

  // Three ways someone reaches out without filling the form. Email is the
  // weakest signal of the three — opening a mail client is not the same as
  // sending — but it still carries the click id, so a sale that starts there
  // can be attributed like any other.
  const CHANNELS = {
    whatsapp_click: { label: 'WhatsApp', tag: 'whatsapp', icon: '💬', verb: 'messaging' },
    click_email:    { label: 'Email',    tag: 'email',    icon: '✉️', verb: 'emailing' },
    phone_click:    { label: 'Phone',    tag: 'call',     icon: '📞', verb: 'calling' },
  } as const;

  const ch = CHANNELS[(body.source || '') as keyof typeof CHANNELS] ?? CHANNELS.phone_click;
  const channel = ch.label;

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
    firstName: `${ch.icon} Incoming ${channel}`,
    lastName: `— ${localTime}`,
    email: syntheticEmail,
    source: `Website ${channel} Click`,
    tags: ['source: website', `intent: ${ch.tag}`, 'no form submitted'],
    attributionSource: { gclid: body.gclid },
    customFields: [
      {
        id: 'mWKpv4wattfdSUPwLSEF', // Estimate Notes
        value:
          `Tapped ${channel} on the website without filling the form.\n` +
          `Page: ${body.page || '(unknown)'}\n` +
          `When: ${localTime} (Ocala time)\n\n` +
          `Came from a Google ad. Rename this card with their real name and ` +
          `contact info when they reach out — then work it like any other lead. ` +
          `If they never did, delete it.\n\n` +
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
          name: `${ch.icon} Incoming ${channel} — ${localTime}`,
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

    // Email the same inboxes that get the form-lead alert. Without this the
    // only warning is the LeadConnector app notification, which is silent if
    // the app isn't installed — and this lead is reaching out RIGHT NOW.
    const alertSubject =
      `${ch.icon} INCOMING ${channel.toUpperCase()} — from a Google ad · ${localTime}`;

    const alertHtml = `<!DOCTYPE html>
<html><body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f5ed;">
  <div style="background: white; padding: 28px; border-top: 6px solid #C4703C;">
    <h1 style="color: #134529; margin: 0 0 8px; font-size: 24px;">${ch.icon} Someone is ${ch.verb} you</h1>
    <p style="color: #62522E; margin: 0 0 24px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong>They came from a Google ad</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 8px 0; color: #62522E; width: 130px;"><strong>When:</strong></td><td style="padding: 8px 0; color: #134529;">${localTime} (Ocala time)</td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>Page:</strong></td><td style="padding: 8px 0; color: #134529;">${body.page || '(unknown)'}</td></tr>
      <tr><td style="padding: 8px 0; color: #62522E;"><strong>How:</strong></td><td style="padding: 8px 0; color: #134529;">Tapped ${channel} on the website</td></tr>
    </table>
    <div style="background: #faf6ed; padding: 16px; border-left: 4px solid #D1B487;">
      <span style="color: #134529;">This person clicked your ad, went to the website and tapped ${channel} — <strong>without filling the form</strong>. We don't have their name or number yet: they were about to reach out.</span>
    </div>
    <div style="background: #fff8e6; padding: 16px; border-left: 4px solid #C4703C; margin-top: 14px;">
      <strong style="color: #62522E; display: block; margin-bottom: 6px;">When you pick up:</strong>
      <span style="color: #134529;">Open the card in the CRM, rename it with their real name and number, and work it like any other lead. If nobody called, delete it.</span>
    </div>
    <div style="margin-top: 28px; padding: 16px; background: #136229; text-align: center;">
      <a href="https://app.gohighlevel.com/v2/location/${env.GHL_LOCATION_ID}/contacts/detail/${contactId || ''}" style="color: #D1B487; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; font-size: 14px;">→ Open the card in CRM</a>
    </div>
  </div>
</body></html>`;

    // Best-effort: a failed alert must never cost the lead that is already saved.
    const alertOne = async (address: string) => {
      try {
        const up = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
          method: 'POST',
          headers: ghlHeaders,
          body: JSON.stringify({
            locationId: env.GHL_LOCATION_ID,
            email: address,
            firstName: 'Ocala Fence Install',
            lastName: '(lead alerts)',
            tags: ['internal: lead alerts'],
          }),
        });
        const upData = await up.json().catch(() => null);
        const alertContactId = (upData as any)?.contact?.id;
        if (!alertContactId) return `upsert failed: ${(upData as any)?.message || up.status}`;

        const res = await fetch('https://services.leadconnectorhq.com/conversations/messages', {
          method: 'POST',
          headers: { ...ghlHeaders, Version: '2021-04-15' },
          body: JSON.stringify({
            type: 'Email',
            contactId: alertContactId,
            subject: alertSubject,
            html: alertHtml,
          }),
        });
        if (res.ok) return undefined;
        const d = await res.json().catch(() => null);
        return (d as any)?.message || `HTTP ${res.status}`;
      } catch (e) {
        return e instanceof Error ? e.message : 'network error';
      }
    };

    const alertErrors = (await Promise.all(ALERT_EMAILS.map(alertOne)))
      .map((err, i) => (err ? `${ALERT_EMAILS[i]}: ${err}` : null))
      .filter(Boolean) as string[];
    if (alertErrors.length) console.error('CALL INTENT ALERT FAILED', alertErrors);

    return new Response(
      JSON.stringify({
        ok: true,
        contactId,
        opportunityId,
        alertErrors: alertErrors.length ? alertErrors : undefined,
      }),
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
