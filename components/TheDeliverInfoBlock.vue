<template>
  <div
    class="fixed w-full h-full top-0 z-10 bottom-0 right-0 left-0 bg-black opacity-60 flex justify-center items-center"
  ></div>
  <div
    class="fixed opacity-100 bottom-0 top-0 left-0 right-0 flex justify-center items-center z-30"
  >
    <div
      class="w-[350px] text-black flex gap-4 flex-col justify-between bg-white rounded-md p-6"
    >
      <h2 class="text-3xl font-semibold text-yellow-500 uppercase">
        order {{ uid }}
      </h2>
      <p class="text-xl border-b-2 border-gray-300 pb-2">
        You can track your order, visiting this service
      </p>
      <h2 class="text-2xl font-semibold underline text-yellow-600">
        Parcel Number
      </h2>
      <p
        class="font-bold text-2xl text-slate-600 bg-gray-100 rounded-lg p-2 w-full"
      >
        {{ deliveryNumber }}
      </p>
      <MyButtonMain
        @click.prevent="copyAndClose"
        class="bg-yellow-500 hover:bg-yellow-300 hover:text-yellow-600 border-none text-2xl p-2 text-white w-full rounded-md"
        >Copy</MyButtonMain
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  uid?: string;
  deliveryNumber?: string;
}>();

const emits = defineEmits<{
  close: [];
}>();

const { $toast } = useNuxtApp();

const copyAndClose = async () => {
  navigator.clipboard.writeText(props?.deliveryNumber).then(async () => {
    $toast.success("Number was successfully copied");
    await new Promise((prom) =>
      setTimeout(() => {
        emits("close");
        prom;
      }, 2000)
    );
  });
};
</script>

<style></style>
