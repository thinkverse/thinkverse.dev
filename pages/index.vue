<template>
  <div class="min-h-screen flex justify-center items-center text-center mx-auto">
    <div>
      <logo />
      <h1 class="text-6xl text-gray-700">
        thinkverse.dev
      </h1>
      <h2 class="text-2xl text-gray-600 font-light">
        My wicked Nuxt.js project
      </h2>
      <div class="pt-6">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="border border-green-500 py-3 px-6 mr-4 text-green-500 rounded-md"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="border border-gray-600 py-3 px-6 text-gray-600 rounded-md"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
