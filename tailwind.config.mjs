/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ── Color palette ─────────────────────────────────────────────
      colors: {
        parchment: {
          DEFAULT: '#F5ECD7', // base page background
          light:   '#FAF4E6', // lighter region
          aged:    '#EAD9B8', // slightly darker / aged
          deep:    '#D9C99A', // darkest parchment tone
        },
        garden: {
          paper: '#E8EDD8', // slightly green-tinted parchment
          board: '#D4D9C2', // worn cork/board tone
        },
        ink: {
          DEFAULT: '#1C1208', // primary text — near-black brown
          muted:   '#7C6A4E', // secondary / muted text
        },
        gold: {
          DEFAULT: '#8B6914', // accent gold
          light:   '#B8922E', // lighter gold for hover states
          pale:    '#C4A96A', // very faint gold for decorative lines
        },
      },

      // ── Typography ────────────────────────────────────────────────
      fontFamily: {
        display:    ['Cinzel', 'serif'],
        decorative: ['"Cinzel Decorative"', 'serif'],
        body:       ['"Crimson Text"', 'serif'],
        fell:       ['"IM Fell English"', 'serif'],
      },

      // ── Spacing & layout ──────────────────────────────────────────
      maxWidth: {
        prose: '72ch',
        wide:  '90rem',
      },
      lineHeight: {
        book: '1.85',
      },

      // ── Shadows (paper-lift effect) ───────────────────────────────
      boxShadow: {
        paper:       '2px 4px 16px rgba(28, 18, 8, 0.18)',
        'paper-lg':  '4px 8px 32px rgba(28, 18, 8, 0.25)',
        'paper-hover': '6px 12px 40px rgba(28, 18, 8, 0.32)',
      },

      // ── Animations ────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fog-reveal': {
          '0%':   { opacity: '0', filter: 'blur(8px) saturate(0.3)' },
          '100%': { opacity: '1', filter: 'blur(0px) saturate(1)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.7s ease forwards',
        'fog-reveal': 'fog-reveal 1s ease forwards',
      },
    },
  },
  plugins: [],
};
