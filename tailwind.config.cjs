/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      'forest-green': '#299137',
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
  plugins: [],
}
