<template>
  <main class="h-screen flex flex-col justify-end items-start md:p-10 lg:p-16">
    <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 ch-20 text-lg md:text-3xl lg:text-5xl md:leading-1 lg:leading-tight font-bold ml-5 md:m-0 md:mb-3 lg:mb-5">
      Sorry, the page you wanted to see cannot be found.
    </h1>
    <NuxtLink to="/" title="Return to home page." class="not-found-anchor block no-underline text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:hover:text-pink-600 dark:focus:text-pink-600 focus:outline-none text-sm md:text-base lg:text-lg font-semibold pt-2 pb-5 px-5 md:p-0">
      <span>
        Return to home.
      </span>
    </NuxtLink>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Page not found.'
  }
}
</script>
