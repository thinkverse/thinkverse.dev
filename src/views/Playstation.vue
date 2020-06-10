<template>
  <main>
    <header class="h-screen w-screen bg-gray-900 flex justify-center content-center flex-wrap">
      <h1 class="font-sans text-white text-6xl lg:text-ps5">
        <Timer deadline="Juni 11 2020 22:00:00 GMT+0200" />
      </h1>
    </header>

    <footer class="absolute w-screen bottom-0 mb-6 text-gray-100 text-center font-sans text-xl">
      <span class="text-gray-500">Take me back to</span> <a class="border-b hover:text-gray-500 hover:border-gray-500" href="https://thinkverse.dev/">thinkverse.dev</a>
    </footer>
  </main>
</template>

<script>
  import Timer from '@/components/Timer.vue';

  export default {
    components: {
      Timer,
    },
    metaInfo: {
      title: 'PS5 Countdown',
    },
  }
</script>
