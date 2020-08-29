export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Personal hobby site of Thinkverse',
    titleTemplate: 'Thinkverse — %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },

      { property: 'og:title', content: 'Personal hobby site of Thinkverse' },
      { property: 'og:description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },
      { property: 'og:url', content: 'https://thinkverse.dev' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Thinkverse' },

      { name: 'twitter:title', content: 'Personal hobby site of Thinkverse' },
      { name: 'twitter:description', content: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://thinkverse.dev' },
      { name: 'twitter:creator', content: '@Thinkverse' }
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
