import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  // Switch to 'static' if you prefer a fully static export
  output: 'server',
  adapter: vercel(),
  // site: 'https://mp0549.github.io',
  site: 'https://maananpurothi.vercel.app/',

  // base: '/maananpurothi/',
});
