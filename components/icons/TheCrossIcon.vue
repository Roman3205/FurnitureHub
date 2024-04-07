<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke=""
      :="attrs"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  </div>
</template>

<script setup>
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<style lang="scss" scoped></style>
