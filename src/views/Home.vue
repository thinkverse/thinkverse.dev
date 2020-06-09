<template>
  <section>
    <header>
      <Navbar />
    </header>
    <main class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </main>
    <Footer />
  </section>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      Navbar
    }
  }
</script>
