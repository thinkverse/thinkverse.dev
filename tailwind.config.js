const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = {
  darkMode: 'media',
  purge: [
    './components/**/*.vue',
    './components/*.vue',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './pages/*.vue'
  ],
  theme: {
    ch: {
      10: 10,
      15: 15,
      20: 20,
      30: 30,
      40: 40,
      50: 50
    },
    extend: {
      colors: {
        teal: colors.teal,
        blue: colors.blue
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, config, e }) {
      addUtilities(
        _.map(config('theme.ch'), (value, key) => {
          return {
            [`.${e(`ch-${key}`)}`]: {
              width: `${value}ch`
            }
          }
        }),
        {
          variants: ['responsive']
        }
      )
    })
  ]
}
