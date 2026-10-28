import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mientras no haya dominio propio, la web vive en
// https://maximilianomoreno-lopez.github.io/horizonterioja/
// Con dominio propio: cambiar SITE al dominio y BASE a '/'.
const SITE = 'https://maximilianomoreno-lopez.github.io';
const BASE = '/horizonterioja';

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
