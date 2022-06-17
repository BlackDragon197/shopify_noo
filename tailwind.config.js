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
    fontFamily:{
      "futura": "Futura PT",
      "montserrat": "'Montserrat', sans-serif",
    },
    maxWidth:{
      '1410': '1410px',
      '380': '380px',
      '740': '740px'
    },
    minWidth:{
      '380': '380px',
      '740': '740px'
    },
    borderRadius:{
      'rounded-3': '3px',
    },
    boxShadow:{
      "1": 'box-shadow: 0px 3.6213px 24.4438px rgba(0, 0, 0, 0.25);'
    },
    extend: {
      
    },
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

  },
  plugins: [],
}
