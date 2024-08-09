import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://fahdazouz.github.io',
  base: '/',
  integrations: [tailwind(), react()],
  build: {
    assets: 'astro'
  },
  vite: {
    build: {
      assetsDir: 'astro', // This ensures Vite uses the correct assets directory
    },
    ssr: {
      external: ["svgo"],
    },
  },
});