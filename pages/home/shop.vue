<template>
  <div>
    <NuxtLayout name="main">
      <TheFiltersBlock />
      <TheProducts :products="products" />
      <!-- <ClientOnly> -->
      <ThePaginationBlock :pages="pages" />
      <!-- </ClientOnly> -->
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "load-user",
});
const productsStore = useProductsStore();
await productsStore.loadProducts(1);
const { products, totalPage } = storeToRefs(productsStore);

const pages = computed<number>(() => {
  return totalPage.value >= 9 ? Math.ceil(totalPage.value / 9) : 1;
});
</script>

<style></style>
