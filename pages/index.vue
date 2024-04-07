<template>
  <div class="w-full flex-col justify-center">
    <TheHomeBanner />
    <TheSuggestionBlock />
    <TheHomeProductsBlock />
    <TheNewArrivalBlock />
    <TheBlogsBlock />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  path: "/",
  alias: "/home",
  name: "home",
  middleware: "load-user",
});
</script>

<style></style>
