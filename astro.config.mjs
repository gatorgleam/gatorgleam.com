// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://gator-gleam.vercel.app', // Update with your actual domain
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
