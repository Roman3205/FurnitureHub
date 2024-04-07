<template>
  <div class="w-full text-black flex justify-center bg-bisq-low">
    <div
      class="flex justify-between w-full max-w-screen-lg items-center px-6 py-4"
    >
      <ClientOnly>
        <div class="text-sm">Showing {{ products.length }} result</div>
      </ClientOnly>
      <div>
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            autocomplete="off"
            class="block w-full active:bg-transparent active:ring-0 focus:ring-gray-400 hover:opacity-70 duration-300 transition active:outline-none focus:outline-none rounded-md p-2 ps-10 text-sm text-black border-2 border-gray-400 bg-transparent"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span>Show</span>
        <input
          type="number"
          class="w-9 h-9 text-black border-none active:outline-none focus:outline-none active:ring-0 focus:ring-0 active:border-0"
          name=""
          id=""
          max="16"
          v-model="show"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const show = ref<number>(0);
const { products } = storeToRefs(useProductsStore());
const productsStore = useProductsStore();
watch(show, async () => {
  if (show.value || show.value > 0) {
    await productsStore.showProductsPer(show.value);
  } else {
    await productsStore.loadProducts(1);
  }
});
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
