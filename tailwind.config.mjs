import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
        display: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};