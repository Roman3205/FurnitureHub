<template>
  <NuxtLayout name="main">
    <div class="w-full flex justify-center">
      <NuxtLayout name="account">
        <div class="flex flex-col col-span-3 gap-10">
          <TheProfileUser />
          <TheProfilePassword />
        </div>
      </NuxtLayout>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
