<template>
  <div class="w-full">
    <NuxtLayout>
      <NuxtLoadingIndicator
        style="opacity: 100 !important"
        color="orange"
        :height="6"
      />
      <TheCartBlock v-if="cart" />
      <p class="text-black">{{ data }}</p>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();
const { data } = useAuth();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
