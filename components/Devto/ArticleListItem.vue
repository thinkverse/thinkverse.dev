<template>
  <li>
    <a :href="article.url">
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
