<template>
  <div class="bg-bisq-hard w-full justify-center flex">
    <div class="max-w-screen-lg w-full flex items-center justify-evenly">
      <div class="flex flex-col gap-5 h-fit">
        <h1
          class="font-semibold overflow-hidden w-4/5 h-fit text-6xl text-black"
        >
          Rocket single seater
        </h1>
        <NuxtLink to="/home/shop">
          <MyButton class="text-xl">Shop Now</MyButton>
        </NuxtLink>
      </div>
      <div>
        <NuxtImg width="630" src="/images/RocketSeater.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
