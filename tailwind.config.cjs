/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    screens: {
      'mobile': '426px',
      'tablet': '768px',
      'desktop':'1350px',
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors:{
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        900: '#1F2937',
        300: '#9CA3AF',
        200: '#C4C4CC',
        100: '#F3F4F6',
        50: '#F9FAFB',
      },

      blue: {
        900: '#1E3A8A',
        700: '#1d4ed8',
      },

      red: {
        800: '#B91C1C',
        700: '#dc2626',
      },
    },
    extend: {  
      fontFamily: {
        sans: [ 'Inter', 'sans-serif' ]
      },
    },
  },
  plugins: [
    plugin(({addVariant}) => {
      addVariant('checked', '&[data-state="checked"]')
    }),
  ],
}
