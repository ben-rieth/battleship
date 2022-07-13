/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      slate: colors.slate,
      sky: colors.sky
    },

    extend: {

      keyframes: {
        shake_no: {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%, 30%, 50%, 70%, 90%': {transform: 'translateX(-5px)'},
          '20%, 40%, 60%, 80%': {transform: 'translateX(5px)'},
        }
      },

      animation: {
        'shake-no': 'shake_no 1s ease-in-out infinite'
      },

      screens: {
        'xs': '375px'
      },

    },
  },
  plugins: [],
}
