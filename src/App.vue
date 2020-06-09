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
      titleTemplate: 'Thinkverse — %s'
    }
  }
</script>

<style src="@/assets/tailwind.css">