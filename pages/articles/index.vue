<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-center mx-auto">
    <ul v-for="article in articles" :key="article.slug">
      <li>
        <a :href="article.url">
          {{ article.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const ARTICLE_ENDPOINT = 'https://dev.to/api/articles/me/published'

export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    fetch(ARTICLE_ENDPOINT, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Headers': 'origin, x-requested-with, accept, api-key',
        'api-key': process.env.DEVTO
      }
    })
      .then(response => response.json())
      .then((data) => { this.setArticles([...data]) })
  },
  methods: {
    setArticles (articles) {
      this.articles = articles.filter(article => !article.title.includes('opengpg proof'))
    }
  }
}
</script>
