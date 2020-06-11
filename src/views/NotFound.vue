<template>
  <main>
    <header class="h-screen w-screen bg-gray-100 flex justify-center content-center flex-wrap">
      <h1 class="font-sans text-gray-800 text-6xl lg:text-7xl">404</h1>
    </header>

    <footer class="absolute w-screen bottom-0 mb-6 text-black text-center font-sans text-xl">
      <span class="text-gray-700">Take me back to</span> <a class="border-b" href="https://thinkverse.dev/">thinkverse.dev</a>
    </footer>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        meta: {
          title: 'Oops, this page does not exist',
          description: 'A hobby site where Thinkverse writes about code, books, and everything he finds interesting.',
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
