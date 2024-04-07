<template>
  <div class="flex flex-col gap-4">
    <NuxtImg class="h-96" :src="`/images/${image}.png`" :alt="image" />
    <h2 class="text-3xl text-black font-semibold">{{ title }}</h2>

    <NuxtLink to="/home/shop">
      <MyButton class="text-xl">View More</MyButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image: string;
  title: string;
}>();
</script>

<style></style>
