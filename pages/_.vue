<template>
  <main class="h-screen flex flex-col justify-end items-start md:p-10 lg:p-16">
    <h1 class="ch-20 text-lg md:text-3xl lg:text-5xl md:leading-1 lg:leading-tight font-bold ml-5 md:m-0 md:mb-3 lg:mb-5">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Sorry, the page you wanted to see cannot be found.
      </span>
    </h1>
    <NuxtLink to="/" class="block text-gray-600 text-sm md:text-base lg:text-lg font-semibold pt-2 pb-5 px-5 md:p-0">
      Return to home.
    </NuxtLink>
  </main>
</template>
