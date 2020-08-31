<template>
  <div>
    <ul v-for="article in articles" :key="article.slug">
      <ArticleListItem :article="article" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ArticleListItem from '@/components/Devto/ArticleListItem'

export default {
  name: 'ArticlesList',
  components: {
    ArticleListItem
  },
  computed: {
    ...mapGetters({
      articles: 'devto/get'
    })
  }
}
</script>
