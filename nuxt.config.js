export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Personal hobby site of Thinkverse',
    titleTemplate: 'Thinkverse — %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },

      { hid: 'og:title', property: 'og:title', content: 'Personal hobby site of Thinkverse' },
      { hid: 'og:description', property: 'og:description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },
      { hid: 'og:url', property: 'og:url', content: 'https://thinkverse.dev' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Thinkverse' },

      { hid: 'twitter:title', name: 'twitter:title', content: 'Personal hobby site of Thinkverse' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://thinkverse.dev' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@Thinkverse' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
  ],
  build: {
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
