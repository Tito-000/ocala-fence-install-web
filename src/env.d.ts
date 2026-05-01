/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID: string;
  readonly PUBLIC_META_PIXEL_ID: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  readonly PUBLIC_GHL_WEBHOOK_URL: string;
  readonly PUBLIC_CAPI_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
