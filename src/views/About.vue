<template>
  <section>
    <header>
      <Navbar />
    </header>
    <main>
      <h1>This is an about page</h1>
    </main>
  </section>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    metaInfo: {
      title: 'Information about Thinkerse',
    },
  }
</script>
