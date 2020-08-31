<template>
  <div class="antialiased min-h-screen flex flex-col items-center sm:justify-center bg-gray-100 dark:bg-gray-900 pt-10 mx-auto sm:pt-0">
    <div>
      <h1 class="text-3xl sm:text-4xl font-medium font-serif text-gray-900 dark:text-gray-200 mb-2 sm:mb-5">
        Articles by Thinkverse
      </h1>
      <ArticlesList class="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-500 space-y-2 -ml-2" />
    </div>
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
