import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio propio configurado en GitHub Pages (Settings → Pages → Custom domain).
const SITE = 'https://www.horizonterioja.eu';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !page.endsWith('/404/') }),
  ],
});
