import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.houndstack.com',
  trailingSlash: 'never',
  redirects: {
    '/request-access': '/early-access',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you') && !page.includes('/request-access'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
