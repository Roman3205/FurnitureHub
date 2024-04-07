<template>
  <div>
    <NuxtLayout name="main">
      <TheFiltersBlock />
      <TheProducts />
      <ThePaginationBlock :pages="pages" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "load-user",
});

const productsStore = useProductsStore();
const { totalPage } = storeToRefs(productsStore);

const pages = computed<number>(() => {
  return totalPage.value >= 9 ? Math.ceil(totalPage.value / 9) : 1;
});
</script>

<style></style>
