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
        900: '#121214',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },

      blue: {
        900: '#021f59',
        700: '#003680'
      },

      green: {
        900: '#334433',
        800: '#465246',
        400: '#00bf44'
      },

      red: {
        800: '#af0000',
        700: '#ce0000'
      }
    },
    extend: {  
      fontFamily: {
        sans: [ 'Inter', 'sans-serif' ]
      },
      boxShadow: {
        'square': '0px 0px 5px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    plugin(({addVariant}) => {
      addVariant('checked', '&[data-state="checked"]')
    }),
  ],
}
