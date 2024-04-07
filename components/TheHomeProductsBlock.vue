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
      <div class="grid grid-cols-4 text-xl gap-5 mx-2">
        <BaseProductsMainItem
          v-for="item in data"
          :key="item._id"
          :id="item._id"
          :title="item?.title"
          :image="item?.image"
          :price="item?.price"
        />
      </div>
      <div class="flex w-full justify-center">
        <NuxtLink to="/home/shop">
          <MyButton class="text-xl">View More</MyButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { productsItem } from "~/types.client.ts";
// const products = reactive<productsItem[]>([]);
const { $toast } = useNuxtApp();
const { data, status, error } = await useFetch<productsItem[]>(
  "/api/products",
  {
    query: {
      picks: true,
      personal: null,
      page: null,
    },
  }
);
if (status.value === "error") {
  $toast.error("Error due to loading products, refresh page", {
    autoClose: 4000,
  });
}
</script>

<style></style>
