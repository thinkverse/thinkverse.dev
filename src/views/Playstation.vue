<template>
  <section>
    <main class="h-screen w-screen bg-black flex justify-center content-center flex-wrap font-ps5 text-center leading-normal lg:leading-tight">
      <section>
        <h1 class="text-white font-normal text-2xl lg:text-6xl uppercase">
          The future of gaming
        </h1>
        <h2 class="text-white font-medium text-6xl lg:text-ps5">
          <Timer deadline="Juni 11 2020 22:00:00 GMT+0200" redirect="https://www.youtube.com/watch?v=RuLci-lSeCo" />
        </h2>
      </section>
    </main>

    <footer class="absolute w-screen flex justify-between px-6 bottom-0 mb-6 text-gray-500 text-center font-sans text-lg lg:text-xl">
      <p>take me back to <a class="border-b text-gray-100 hover:text-gray-500 hover:border-gray-500" href="https://thinkverse.dev/" hreflang="en">thinkverse.dev</a>.</p>
      <p>view the <a class="border-b text-gray-100 hover:text-gray-500 hover:border-gray-500" href="https://github.com/thinkverse/thinkverse.dev" hreflang="en">source code</a>.</p>
    </footer>
  </section>
</template>

<script>
  import Timer from '@/components/Timer.vue';

  export default {
    components: {
      Timer,
    },
    data() {
      return {
        meta: {
          title: 'PS5 Countdown',
          description: 'A countdown to the Playstation 5 event, the future of gaming.',
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
