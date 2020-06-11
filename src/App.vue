<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: 'Personal hobby site of Thinkverse',
      titleTemplate: 'Thinkverse — %s',
      meta: [
        { property: "og:url", content: new URL(window.location).href },
        { property: "og:type", content: 'website' },
        { property: 'og:site_name', content: 'Thinkverse'},

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: new URL(window.location).href },
        { name: 'twitter:creator', content: '@Thinkverse' },
      ],
    }
  }
</script>

<style src="@/assets/tailwind.css">