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
const ARTICLE_ENDPOINT = 'https://dev.to/api/articles?username=thinkverse'

export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    fetch(ARTICLE_ENDPOINT)
      .then(response => response.json())
      .then((data) => { this.setArticles([...data]) })
  },
  methods: {
    setArticles (articles) {
      this.articles = articles.filter(article => !article.title.includes('opengpg proof'))
    }
  },
  head: {
    title: 'Articles written by Thinkverse',
    meta: [
      { hid: 'description', name: 'description', content: 'Here you can find a collection of articles written by Thinkverse. ✍️' },
      { hid: 'og:description', property: 'og:description', content: 'Here you can find a collection of articles written by Thinkverse. ✍️' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Here you can find a collection of articles written by Thinkverse. ✍️' }
    ]
  }
}
</script>
