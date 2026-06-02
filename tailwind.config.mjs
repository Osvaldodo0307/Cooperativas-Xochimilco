/** @type {import('tailwindcss').Config} */
import { alcaldia, clasesSafelist, eesys, xochimilco } from './src/design-system/colors.mjs';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/styles/global.css',
  ],
  safelist: [
    ...clasesSafelist,
    {
      pattern:
        /^(bg|text|border|outline|ring|hover:bg|hover:text|hover:border|focus:border|focus:ring|focus-visible:outline)-alcaldia-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^(bg|text|border|outline|ring|hover:bg|focus-visible:outline)-xochimilco-(red|green|green-light|yellow|orange|burgundy)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        alcaldia,
        /* Alias histórico: institucional-* → misma guinda */
        institucional: { ...alcaldia },
        xochimilco,
        eesys,
        superficie: {
          DEFAULT: '#fafaf9',
          card: '#ffffff',
          muted: '#f5f5f4',
        },
      },
      outlineColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      ringColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      fontFamily: {
        sans: [
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
      lineHeight: {
        relaxed: '1.65',
      },
    },
  },
  plugins: [],
};
