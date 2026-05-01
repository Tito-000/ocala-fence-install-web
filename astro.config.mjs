import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ocalafenceinstall.com',
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
});
