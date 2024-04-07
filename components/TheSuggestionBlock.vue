<template>
  <div class="bg-bisq-low pt-8 pb-14 w-full justify-center flex">
    <div class="max-w-screen-lg w-full gap-8 flex justify-evenly">
      <BaseSuggestionItem
        v-for="item in itemsForSale"
        :key="item.id"
        :title="item.title"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { itemSuggestion } from "~/types.client.ts";
const itemsForSale = reactive<itemSuggestion[]>([
  { id: 0, title: "Side table", image: "SideTable1" },
  { id: 1, title: "Side table", image: "SideTable2" },
]);
</script>

<style></style>
