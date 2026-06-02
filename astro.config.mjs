import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cooperativas-xochimilco.netlify.app',
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
  ],
});
