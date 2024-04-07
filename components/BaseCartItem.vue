<template>
  <div
    class="flex justify-between gap-10 pr-1 items-center pb-2 cursor-pointer"
  >
    <div class="flex items-center gap-4">
      <NuxtImg
        class="bg-bisq-hard rounded-md"
        :src="`/products/${image}`"
        width="90"
        :alt="image"
      />
      <div class="flex flex-col gap-2">
        <p class="line-clamp-1 text-black font-medium break-all">
          {{ title }}
        </p>
        <p class="flex items-center gap-1 text-black">
          ><span class="font-semibold line-clamp-1 break-all">{{
            price.toFixed(2)
          }}</span>
        </p>
      </div>
    </div>
    <IconsTheCrossIcon
      @click.prevent.stop="removeFromCart"
      class="h-5 cursor-pointer hover:opacity-65 transition duration-300 flex justify-center items-center p-0.5 overflow-hidden w-5 rounded-full bg-gray-500 stroke-white"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  title: string;
  price: number;
  image: string;
}>();

const { $toast } = useNuxtApp();

const emits = defineEmits<{
  remove: [];
}>();

const removeFromCart = async () => {
  try {
    await $fetch("/api/cart-remove", {
      method: "POST",
      body: {
        price: props.price,
        id: props.id,
      },
    });

    emits("remove");
    const userStore = useUserStore();
    await userStore.loadUser();

    return $toast.success("Product has removed to your cart");
  } catch (e) {
    return $toast.error("Bad remove to cart");
  }
};
</script>

<style lang="scss" scoped></style>
