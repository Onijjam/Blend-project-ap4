/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'title': ['Outfit'],
      'body': ['Open Sans']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'raisin-black': '#2b2726',
      'forest-green': {
        DEFAULT : '#299137',
        200 : '#237D2B',
        400 : '#1D6920',
        600 : '#165515',
        800 : '#0F410A',
      },
      'cinnabar': '#ef482A',
      'pacific-cyan': '#15aece',
      gray : colors.gray,
      black : colors.black,
      yellow : colors.yellow
    },
    extend: {boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.bg-conic-gradient': {
          "--mask":
              'conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) 50%/60.00px 100%',
          WebkitMask: "var(--mask)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}
