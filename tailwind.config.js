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
      '740': '740px',
      'fit': 'fit-content'
    },
    minWidth:{
      '380': '380px',
      '740': '740px'
    },
    borderRadius:{
      'rounded-3': '3px',
      '5': '5px',
      '8': '8px',
    },
    boxShadow:{
      "1": 'box-shadow: 0px 3.6213px 24.4438px rgba(0, 0, 0, 0.25);'
    },
    extend: {
      animation: {
        'move-vertical': 'moveVertical 5s ease-in-out infinite',
        'move-vertical-pc': 'moveVerticalPC 5s ease-in-out infinite',
        'move-vertical2': 'moveVertical2 5s ease-in-out infinite',
        'move-vertical-pc2': 'moveVerticalPC2 5s ease-in-out infinite',
      },
      keyframes: {
        moveVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }, // For mobile/tablet
        },
        moveVerticalPC: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' }, // For desktop
        },
        moveVertical2: {
          '50%': { transform: 'translateY(-15px)' }, // For mobile/tablet
          '0%, 100%': { transform: 'translateY(0)' },
        },
        moveVerticalPC2: {
          '50%': { transform: 'translateY(-25px)' }, // For desktop
          '0%, 100%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'span-linear': 'linear-gradient(to top, #341087 52%, #A669EF 100%)',
      },
    },
    screens: {
      'xs': '375px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },
  },
  plugins: [],
}
