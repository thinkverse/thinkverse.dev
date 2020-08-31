<template>
  <li>
    <a :href="article.url" class="transition-colors ease-in-out duration-200 hover:bg-pink-600 hover:text-pink-100 focus:bg-pink-600 focus:text-pink-100 px-2 py-1">
      {{ article.title }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          url: 'https://thinkverse.dev',
          title: 'No article found, please return later'
        }
      },
      required: true
    }
  }
}
</script>
