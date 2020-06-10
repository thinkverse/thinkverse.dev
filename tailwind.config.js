module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '15rem',
        'ps5': '11rem',
      },
      fontFamily: {
        'ps5': ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      }
    },
  },
  variants: {},
  plugins: [],
}
