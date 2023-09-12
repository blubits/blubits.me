/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
        "display": ["Inter Tight", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

