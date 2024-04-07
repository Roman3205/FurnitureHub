<template>
  <div
    class="w-full flex justify-center"
    :class="{
      'bg-bisq-hard': useRoute().name === 'index',
    }"
  >
    <div
      class="max-w-screen-lg grid w-full grid-cols-3 xs:gap-4 text-black justify-between items-center py-4"
    >
      <div
        @click.prevent="useRouter().push('/')"
        class="flex items-center cursor-pointer hover:opacity-65 transition"
      >
        <NuxtImg src="/favicon.png" width="60" />
        <h2 class="font-bold text-2xl">FurnitureHub</h2>
      </div>
      <div class="flex justify-center">
        <ul class="flex items-center lg:gap-10 xs:gap-4">
          <li>
            <NuxtLink to="/home/shop">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/home/shop">Shop</NuxtLink>
          </li>
          <li @click="showError({ status: 404, message: 'not found' })">
            About
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul class="flex gap-5 items-center justify-end">
          <li>
            <NuxtLink to="/home/account/login"><IconsTheUserIcon /></NuxtLink>
          </li>
          <li>
            <IconsTheCartIcon class="w-6 h-6" @click.prevent="cartAction" />
          </li>
          <li>
            <LangSwitcher />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cart = useCart();
const { status } = useAuth();

const cartAction = () => {
  if (status.value !== "authenticated") {
    return navigateTo("/home/account/login");
  }
  return (cart.value = true);
};
</script>

<style lang="scss">
ul li {
  cursor: pointer;
  transition: all 0.7s ease-in;

  &:hover {
    opacity: 0.6;
  }
}
</style>
