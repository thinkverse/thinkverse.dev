<template>
  <main class="h-screen flex flex-col justify-end items-start md:p-10 lg:p-16">
    <h1 class="ch-20 text-lg md:text-3xl lg:text-5xl md:leading-1 lg:leading-tight font-bold ml-5 md:m-0 md:mb-3 lg:mb-5">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Sorry, the page you wanted to see cannot be found.
      </span>
    </h1>
    <NuxtLink to="/" title="Return to home page."  class="block text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none text-sm md:text-base lg:text-lg font-semibold pt-2 pb-5 px-5 md:p-0">
      <span>
        Return to home.
      </span>
    </NuxtLink>
  </main>
</template>

<style scoped>
a[href] > span {
  text-decoration: none;
  position: relative;
  z-index: 0;
}

a[href]:hover > span:before,
a[href]:focus > span:before {
  transform: skew(-1deg) rotate(-1deg);
  border-bottom: 13px solid #dacc14;
  left: -2px; right: 2px;
  position: absolute;
  bottom: 2px;
  content: "";
  z-index: -1;
}
</style>
