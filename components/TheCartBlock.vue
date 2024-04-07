<template>
  <div
    class="fixed w-full h-full bottom-0 top-0 left-0 right-0 bg-black opacity-70 z-20"
  ></div>
  <div
    class="flex opacity-100 fixed top-0 w-1/5 max-h-[500px] right-0 h-full gap-5 pt-7 pb-9 px-8 flex-col bg-white z-30"
  >
    <div class="flex items-center justify-between w-full">
      <h3 class="text-black text-xl font-semibold">Shopping Card</h3>
      <IconsTheCrossIcon
        @click="cartAction"
        class="h-6 w-6 stroke-gray-500 duration-300 transition hover:opacity-65 cursor-poiner"
      />
    </div>
    <div
      class="products-block flex flex-col gap-3 flex-1 border-y-2 border-soft-primary py-4 overflow-y-scroll pr-2"
    >
      <BaseCartItem
        :class="{
          'border-b border-gray-500':
            index != cartProducts?.products.length - 1,
        }"
        v-for="(cartItem, index) in cartProducts.products"
        :key="String(cartItem._id)"
        :title="cartItem.product.title"
        :price="cartItem.price"
        :id="cartItem._id"
        :image="cartItem.product.image"
        @remove="refresh"
      />
    </div>
    <div class="flex flex-col gap-4 text-black">
      <div class="flex items-center justify-between">
        <p>Subtotal</p>
        <p class="font-bold text-yellow-300">{{ cartProducts.totalPrice }}</p>
      </div>
      <MyButtonMain class="w-full">Checkout</MyButtonMain>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { cartProduct } from "./types.client.ts";

const cart = useCart();
const cartAction = () => {
  cart.value = false;
};

const cartProducts = ref<{
  products: cartProduct[];
  totalPrice: number;
}>();

const { data, error, status, refresh } = await useFetch("/api/cart", {
  method: "GET",
});
watchEffect(() => {
  cartProducts.value = data.value;
});
</script>

<style></style>
