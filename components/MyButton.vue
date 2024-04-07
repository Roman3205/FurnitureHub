<template>
  <button
    :="attrs"
    class="bg-transparent w-fit font-semibold text-black border-b-2 border-black py-2"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
</script>

<style></style>
