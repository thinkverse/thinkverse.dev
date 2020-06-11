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
    },
    data() {
      return {
        meta: {
          title: 'Personal hobby site of Thinkverse',
          description: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting..',
        },
      }
    },
    metaInfo()  {
      const title = `Thinkverse — ${this.$data.meta.title}`;

      const meta = [
        { name: 'title', content: title },
        { name: 'description', content: this.$data.meta.description },

        { property: 'og:title', content: title },
        { property: 'og:description', content: this.$data.meta.description },

        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: this.$data.meta.description },

        { itemprop: 'name', content: title },
        { itemprop: 'description', content: this.$data.meta.description },
      ];

      if (this.$data.meta.image) {
        meta.push(...[
          { name: 'twitter:image:src', content: this.$data.meta.image },
          { itemprop: 'image', content: this.$data.meta.image },
        ])
      }

      return { title: this.$data.meta.title, meta }
    },
  }
</script>
