# Tracking IDs — Ocala Fence Install

Master reference for every analytics, advertising, and CRM ID wired
into ocalafenceinstall.com. **Do not commit secrets** — only public IDs
live here. Secrets (PIT, API keys) live as Cloudflare env vars.

---

## 🟢 Live in production

### Google Analytics 4
| Field | Value |
|---|---|
| **Measurement ID** | `G-VXDG7SMKPR` |
| Property name | Ocala Fence Install |
| Account name | Ocala Fence Install Inc. |
| Owner email | ocalafenceinstall@gmail.com |
| Time zone | America/New_York |
| Currency | USD |
| Stream URL | https://ocalafenceinstall.com |
| Stream name | Ocala Fence Install — Production |
| Cloudflare env var | `PUBLIC_GA4_ID` |

### Cloudflare Pages
| Field | Value |
|---|---|
| Project | `ocala-fence-install-web` |
| Account ID | `355d8680e58f6efb8a1420f936b6ae7c` |
| Production URL | https://ocalafenceinstall.com |
| Preview URL | https://ocala-fence-install-web.pages.dev |
| GitHub repo | `Tito-000/ocala-fence-install-web` |

### Cloudflare Pages env vars (Production)
| Name | Type | Purpose |
|---|---|---|
| `PUBLIC_GA4_ID` | Plaintext | GA4 measurement ID (exposed to browser) |
| `GHL_LOCATION_ID` | Plaintext | GHL sub-account ID for /api/lead Function |
| `GHL_PIT` | Secret | GHL Private Integration Token (server-side only) |

### GoHighLevel
| Field | Value |
|---|---|
| Sub-account name | Ocala Fence Install |
| Location ID | `3q4kG6T1g5e8lgPToDuz` |
| Pipeline ID | `DqLZHRBvcSW50Gov4OPE` ("Fence Sales") |
| Stage "New Lead" ID | `5ff68988-dc04-4a47-a183-3272fd20fd74` |
| Owner contact ID (Andri) | `0LhuwxcUOlVgcAUqAqB7` |
| API Base | `https://services.leadconnectorhq.com` (Version: `2021-07-28`) |

### Custom field IDs (GHL)
| Field name | ID | Type |
|---|---|---|
| Fence Type | `Y2wgrZQQpUIjYSqomjuc` | SINGLE_OPTIONS |
| Linear Feet | `fd2981zSCYkR6Zm6gIeI` | NUMERICAL |
| Property Type | `HBL6fkRbP7jLcPcQmdh6` | SINGLE_OPTIONS |
| How Heard About Us | `1LbjV1puVg5ldktoekTP` | SINGLE_OPTIONS |
| Estimate Notes | `mWKpv4wattfdSUPwLSEF` | LARGE_TEXT |

---

## 🟡 Pending — needs manual setup

### Meta Pixel (Facebook / Instagram Ads)
| Field | Value |
|---|---|
| Pixel ID | `(pending)` |
| Cloudflare env var | `PUBLIC_META_PIXEL_ID` |
| Account | Ocala Fence Install Business Manager (pending creation) |

### Google Tag Manager
| Field | Value |
|---|---|
| GTM Container ID | `(not used — events fire directly via gtag)` |
| Note | We chose direct gtag implementation over GTM. Faster, simpler, fewer layers. If we need to swap to GTM later, just add the container snippet to BaseLayout. |

### Google Ads
| Field | Value |
|---|---|
| Customer ID | `(pending)` |
| Conversion linker | `(pending — will link via GA4 once Ads account is created)` |
| $500 credit | Reserved, redeem when launching first campaign |

---

## 📡 Events tracked (GA4)

All events fire to GA4 automatically via `BaseLayout.astro` script.

### Conversion events (mark as conversions in GA4 → Admin → Events)
| Event name | Where it fires | Meta Pixel mapping |
|---|---|---|
| `lead_form_submit` | After successful POST to `/api/lead` from `/free-estimate` | `Lead` |
| `phone_click` | Any `<a href="tel:...">` with `data-track="phone_click"` | `Contact` |
| `whatsapp_click` | Any `wa.me` link with `data-track="whatsapp_click"` | `Contact` |
| `cta_estimate_click` | Any `<a href*="/free-estimate">` (auto-detected) | `CTAEstimateClick` (custom) |

### Engagement events (not conversions, useful for funnels)
| Event name | When |
|---|---|
| `engaged_scroll` | User scrolls ≥75% of any page |
| `engaged_time` | User stays on page ≥60 seconds |
| `lead_calculator_used` | User interacts with the financing calculator |
| `click_qualify_financing` | Click on "See if you qualify for financing" button |

---

## 🧪 How to test

1. **GA4 DebugView**
   - Install Google Analytics Debugger extension in Chrome
   - Visit ocalafenceinstall.com
   - GA4 → Admin → DebugView → events should appear in real time
2. **Tag Assistant**
   - https://tagassistant.google.com → enter URL → connect → click around the site
3. **Submit a test lead**
   - Fill `/free-estimate` form end-to-end → check:
     - Lead in GHL Contacts
     - Card in Fence Sales pipeline → New Lead column
     - SMS to Andri (863) 377-0928
     - Email to ocalafenceinstall@gmail.com
     - GA4 event `lead_form_submit` in DebugView

---

## 🔧 How to swap a measurement ID

1. Update value in Cloudflare Pages → Settings → Variables and Secrets
2. Trigger redeploy (push any change to GitHub `main` or click "Retry deployment")
3. Update the table at the top of this doc
4. Confirm in GA4 DebugView within 30 seconds
