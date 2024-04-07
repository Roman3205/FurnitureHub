<template>
  <div
    class="flex flex-col duration-300 relative h-auto justify-evenly gap-4 border-2 rounded-md cursor-pointer hover:opacity-55"
  >
    <div class="absolute top-2 left-2 z-10">
      <IconsTheCartIcon
        @click.prevent.stop="addToCart"
        v-if="status === 'authenticated'"
        :class="{
          'fill-green-400': isInCart,
        }"
        class="stroke-green-400 w-10 h-10"
      />
    </div>
    <NuxtImg class="h-3/5" :src="`/products/${image}`" :alt="image" />
    <div class="flex flex-col justify-evenly h-2/5 px-2">
      <h2 class="text-2xl text-black line-clamp-2 overflow-hidden">
        {{ title }}
      </h2>
      <span class="text-black overflow-hidden font-semibold text-3xl">{{
        priceFixed(price)
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { status } = useAuth();
const props = defineProps<{
  id: string;
  image: string;
  title: string;
  price: number;
}>();

const { $toast } = useNuxtApp();
const isInCart = computed(() => checkInCart(props.id));

const addToCart = async () => {
  try {
    if (status.value !== "authenticated") {
      return $toast.error("You are not authorized");
    }
    if (isInCart.value) {
      return $toast.error("Product is already in your cart");
    }
    await $fetch("/api/cart-add", {
      method: "POST",
      body: {
        price: props.price,
        id: props.id,
      },
    });

    const userStore = useUserStore();
    await userStore.loadUser();

    return $toast.success("Product has been added to your cart");
  } catch (e) {
    return $toast.error("Bad add to cart");
  }
};
</script>

<style></style>
