/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = {
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
      '10': 10,
      '15': 15,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50
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
      );
    })
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
