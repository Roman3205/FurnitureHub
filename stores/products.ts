import { defineStore } from "pinia";
import type { productsItem } from "~/types.client.ts";

import { useNuxtApp } from "#app";
let $toast = null;
if (process.client) {
  $toast = useNuxtApp().$toast;
}

export const useProductsStore = defineStore("productsStore", () => {
  const products = ref<productsItem[]>([]);
  const totalPage = ref<number>(1);
  const productsCount = computed(() => products.value.length);
  const loadProducts = async (page: number) => {
    try {
      const data = await $fetch<any>("/api/products", {
        method: "GET",
        query: {
          picks: false,
          page: page,
        },
      });

      totalPage.value = data.totalCount;
      products.value = data.products;
      //   Object.assign(products, data);
    } catch (e) {
      console.log(e);

      return $toast.error("Error due to loading products, refresh page", {
        autoClose: 4000,
      });
    }
  };
  const showProductsPer = async (show: number) => {
    try {
      const data = await $fetch<any>("/api/products", {
        method: "GET",
        query: {
          picks: false,
          page: 1,
          personal: show,
        },
      });
      totalPage.value = 1;
      products.value = data;
    } catch (e) {
      console.log(e);

      return $toast.error("Error due to loading products, refresh page", {
        autoClose: 4000,
      });
    }
  };
  return {
    products,
    loadProducts,
    showProductsPer,
    totalPage,
    productsCount,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
