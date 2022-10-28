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
      keyframes: {
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
        "spin": {
          "0%": { transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        }
      }      
    },
    animation: {
      // Toast
      "toast-hide": "toast-hide 100ms ease-in forwards",
      "toast-slide-in-right":
        "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      "toast-slide-in-bottom":
        "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      "spin": "spin 1s linear infinite",
    }
  },
  plugins: [
    plugin(({addVariant}) => {
      addVariant('checked', '&[data-state="checked"]')
    }),
    [require("tailwindcss-radix")()],
  ],
}
