import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import rehypeProse from './src/lib/rehype-prose.mjs';

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],

  // Greenhouse note bodies are markdown; rehypeProse adds the house
  // [text|definition] tooltip syntax on top of it. See src/lib/rehype-prose.mjs.
  markdown: {
    rehypePlugins: [rehypeProse],
  },
  // Switch to 'static' if you prefer a fully static export
  output: 'server',
  adapter: vercel(),
  // site: 'https://mp0549.github.io',
  site: 'https://maananpurothi.vercel.app/',

  vite: {
    server: {
      // The project lives on /mnt/c (WSL → Windows 9p mount), where native file
      // events don't fire. Without polling, dev-server HMR silently misses edits.
      watch: { usePolling: true, interval: 300 },
    },
  },

  // base: '/maananpurothi/',
});
