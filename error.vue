<template>
  <NuxtLayout name="default">
    <div class="w-full flex flex-col items-center flex-1">
      <div class="max-w-screen-lg flex items-center flex-col py-10 gap-10">
        <TheErrorBlock />
        <div class="flex flex-col gap-6 items-center">
          <h2 class="text-4xl">The error has been occured</h2>
          <p class="text-2xl">{{ error?.message }}</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// const error = useError();
import type { NuxtError } from "#app";
defineProps({
  error: {
    type: Object as () => NuxtError,
  },
});
</script>

<style></style>
