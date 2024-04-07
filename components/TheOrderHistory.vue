<template>
  <div class="w-full flex flex-col gap-4" :="attrs">
    <div
      class="grid grid-cols-4 pb-3 border-b-2 justify-items-center border-gray-300"
    >
      <span class="text-gray-500">Number ID</span>
      <span class="text-gray-500">Dates</span>
      <span class="text-gray-500">Status</span>
      <span class="text-gray-500">Price</span>
    </div>
    <BaseOrderItem
      v-for="item in orders"
      :key="item.id"
      :uid="item.uid"
      :status="item.status"
      :dates="item.dates"
      :price="item.price"
      @click="
        openDeliveryMenu({ uid: item.uid, deliveryNumber: item.deliveryNumber })
      "
    />
  </div>
  <TheDeliverInfoBlock
    @close="closeMenu"
    v-if="isDeliverBlock"
    :uid="orderToDeliver?.uid"
    :delivery-number="orderToDeliver?.deliveryNumber"
  />
</template>

<script lang="ts" setup>
import type { orders } from "~/types.client.ts";
const attrs = useAttrs();
const orderToDeliver = ref<{
  uid: string;
  deliveryNumber: string;
}>();
const isDeliverBlock = ref<boolean>(false);
const closeMenu = () => (isDeliverBlock.value = !isDeliverBlock.value);
const orders = reactive<orders[]>([
  {
    id: 0,
    uid: "#3456_322",
    dates: "October 17, 2023",
    status: "Delivered",
    price: 321,
    deliveryNumber: "jn9d298e92uud82d2ud2",
  },
  {
    id: 1,
    uid: "#1932_732",
    dates: "October 19, 2023",
    status: "Delivered",
    price: 321,
    deliveryNumber: "1231d298e92uud82d2d2",
  },
  {
    id: 2,
    uid: "#2131_652",
    dates: "October 22, 2023",
    status: "Delivered",
    price: 321,
    deliveryNumber: "1231d298e92uud11d2d5",
  },
]);
interface deliverType {
  uid: string;
  deliveryNumber: string;
}
const openDeliveryMenu = (obj: deliverType) => {
  orderToDeliver.value = {
    uid: obj.uid,
    deliveryNumber: obj.deliveryNumber,
  };
  isDeliverBlock.value = true;
};
</script>

<style></style>
