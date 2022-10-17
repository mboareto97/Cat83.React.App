/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    screens: {
      'mobile': '640px',
      'tablet': '900px',
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
        300: '#bfbfbf',
        200: '#eef0f5',
        100: '#f8f9fa'
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
    },
  },
  plugins: [
    plugin(({addVariant}) => {
      addVariant('checked', '&[data-state="checked"]')
    }),
  ],
}
