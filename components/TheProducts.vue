<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-screen-lg flex justify-center">
      <div class="w-full grid grid-cols-3 gap-3 py-6">
        <BaseProductsMainItem
          v-for="item in products"
          :key="item._id"
          :id="item._id"
          :title="item.title"
          :image="item.image"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { products } = defineProps<{
  products: {
    _id: string;
    title: string;
    image: string;
    price: number;
  }[];
}>();
</script>

<style></style>
