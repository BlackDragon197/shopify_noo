/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },
  },
  plugins: [],
}
