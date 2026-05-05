import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ocalafenceinstall.com',
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  compressHTML: true,
});
