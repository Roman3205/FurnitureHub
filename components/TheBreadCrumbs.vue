<template>
  <div class="text-black flex items-center gap-2">
    <span
      class="flex items-center gap-2"
      :class="{
        'font-bold': index === 0,
      }"
      v-for="(word, index) in words"
      :key="word"
    >
      {{ word }}
      <component
        v-if="index !== words.length - 1"
        :is="TheArrowIcon"
      ></component>
    </span>
  </div>
</template>

<script lang="ts" setup>
const TheArrowIcon = resolveComponent("IconsTheArrowIcon");
const words = breadCrumbs(useRoute().fullPath);
</script>

<style></style>
