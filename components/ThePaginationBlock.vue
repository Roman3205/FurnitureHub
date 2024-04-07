<template>
  <div class="flex items-center pt-12 pb-20 gap-5 justify-center w-full">
    <button
      v-for="page in pages"
      class="rounded-md text-xl font-semibold text-black flex justify-center items-center py-3 px-5"
      :key="page"
      :class="{
        'bg-bisq-hard': page === currentPage,
        'bg-bisq-medium': page !== currentPage,
      }"
      @click.prevent.stop="selectPage(page)"
    >
      {{ page }}
    </button>
    <button
      v-if="pages > 1 && currentPage !== pages"
      @click.prevent.stop="selectPage(currentPage + 1)"
      class="rounded-md text-xl bg-bisq-medium text-black flex justify-center items-center py-3 px-5"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  pages: {
    type: Number,
    required: true,
  },
});

const currentPage = ref<number>(1);

const selectPage = async (page: number) => {
  currentPage.value = page;
  const productsStore = useProductsStore();
  await productsStore.loadProducts(page);
};
</script>

<style></style>
