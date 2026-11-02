// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// See DESIGN.md: canonical URLs have no trailing slash and no `.html`.
export default defineConfig({
  site: 'https://ar.to',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [mdx(), sitemap()],
});
