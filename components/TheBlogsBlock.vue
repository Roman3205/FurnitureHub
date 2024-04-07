<template>
  <div class="w-full flex justify-center">
    <div class="flex w-full py-10 max-w-screen-lg flex-col gap-14">
      <div class="flex flex-col items-center gap-3">
        <h1 class="text-4xl font-semibold text-black">Top Picks For You</h1>
        <p class="text-gray-400 text-xl">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div class="grid grid-cols-3 text-xl gap-5 mx-2">
        <BaseBlogItem
          @click="showError({ status: 404, message: 'not found' })"
          class="h-auto"
          v-for="item in blogs"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :timeOfRead="item.timeOfRead"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type blogsItem from "./types.client.ts";
const blogs = reactive<blogsItem[]>([
  {
    id: 0,
    title: "Going all-in with millennial design",
    timeOfRead: 5,
    image: "blog1",
  },
  {
    id: 1,
    title: "Going all-in with millennial design",
    timeOfRead: 5,
    image: "blog2",
  },
  {
    id: 2,
    title: "Going all-in with millennial design",
    timeOfRead: 5,
    image: "blog3",
  },
]);
</script>

<style></style>
