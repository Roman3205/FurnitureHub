<template>
  <div
    class="flex flex-col gap-6 items-center h-fit py-8 px-5 rounded-md bg-gray-100"
  >
    <div class="gap-2 flex flex-col items-center">
      <NuxtImg
        :src="
          user?.avatar.startsWith('http')
            ? user?.avatar
            : 'data:image/image/png;base64,' + user?.avatar
        "
        width="80"
        class="cursor-pointer"
      />
      <h3 class="text-2xl font-semibold text-black">{{ user?.name }}</h3>
    </div>
    <div class="w-full">
      <button
        @click="useRouter().push('/home/account')"
        :class="{
          'after:w-full text-black after:h-[2.5px]': !!accountInfo,
          'after:w-0 text-slate-500 after:h-[2.5px]': !accountInfo,
        }"
        class="bg-transparent hover:text-black transition duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full relative text-left border-b-0 w-full font-semibold py-2"
      >
        Account
      </button>
      <button
        @click="useRouter().push('/home/account/orders')"
        :class="{
          'after:w-full text-black after:h-[2.5px]': !!accountOrders,
          'after:w-0 text-slate-500': !accountOrders,
        }"
        class="bg-transparent hover:text-black transition duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3.2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full relative text-left border-b-0 w-full font-semibold py-2"
      >
        Orders
      </button>
      <button
        @click.prevent="leaveAccount"
        class="bg-transparent hover:text-black transition duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3.2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full relative text-left border-b-0 text-slate-500 w-full font-semibold py-2"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const accountInfo = computed(() => useRoute().name === "home-account");
const accountOrders = computed(() => useRoute().name === "home-account-orders");

const userState = useUserStore();
await userState.loadUser();
const { user } = storeToRefs(userState);

const { signOut } = useAuth();
const leaveAccount = async () => {
  try {
    await signOut({ callbackUrl: "", redirect: false });
    return navigateTo("/", {
      redirectCode: 200,
    });
  } catch (e) {
    throw createError({
      status: 400,
      message: "Some errors with logging out",
    });
  }
};
</script>

<style></style>
