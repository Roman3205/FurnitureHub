<template>
  <div class="bg-bisq-medium w-full justify-center flex">
    <div class="max-w-screen-lg w-full flex items-center justify-evenly">
      <div>
        <NuxtImg width="700" src="/images/AsgaardSofa.png" />
      </div>
      <div class="flex flex-col gap-5 h-fit">
        <span class="text-xl font-semibold text-black">New Arrivals</span>
        <h1 class="font-semibold overflow-hidden h-fit text-5xl text-black">
          Asgaard sofa
        </h1>
        <NuxtLink to="/home/shop">
          <MyButtonMain class="text-xl px-8 py-4 mt-2">Order Now</MyButtonMain>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
