<template>
  <div
    class="flex flex-col items-center gap-4 cursor-pointer hover:opacity-55 duration-300"
  >
    <NuxtImg
      class="rounded-md w-full"
      :src="`/images/${image}.png`"
      :alt="image"
    />
    <div class="flex flex-col gap-2 items-center">
      <span class="text-black">{{ title }}</span>
      <MyButton>Read More</MyButton>
      <div class="flex items-center gap-2">
        <IconsTheClockIcon class="text-black" />
        <span class="text-black text-sm">{{ timeOfRead }} min</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  image: string;
  title: string;
  timeOfRead: number;
}>();
</script>

<style></style>
