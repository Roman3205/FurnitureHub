<template>
  <button
    :="attrs"
    class="bg-transparent rounded-md hover:text-white hover:bg-black font-semibold text-black border-2 border-black py-2"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
</script>

<style></style>
