<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-center mx-auto">
    <ArticlesList />
  </div>
</template>

<script>
import ArticlesList from '@/components/Devto/ArticlesList'

export default {
  components: {
    ArticlesList
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
