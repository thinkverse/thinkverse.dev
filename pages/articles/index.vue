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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      articles: 'devto/get'
    })
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
