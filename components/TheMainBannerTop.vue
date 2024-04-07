<template>
  <div class="layout w-full h-60 flex justify-center flex-col items-center">
    <NuxtImg src="/favicon.png" width="70" />
    <h1 class="font-semibold mb-2 text-4xl text-black">
      {{ routeName(useRoute().name, useRoute().params) }}
    </h1>
    <TheBreadCrumbs />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
