<template>
  <div class="w-full">
    <div
      class="grid cursor-pointer transition-all duration-300 hover:opacity-60 grid-cols-4 pb-3 border-b-2 justify-items-center border-gray-300"
    >
      <span class="text-gray-500">{{ uid }}</span>
      <span class="text-gray-500">{{ dates }}</span>
      <span class="text-gray-500">{{ status }}</span>
      <span class="text-gray-500">{{ priceFixed(price) }} &#36;</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  uid: string;
  dates: string;
  status: string;
  price: number;
}>();
</script>

<style></style>
