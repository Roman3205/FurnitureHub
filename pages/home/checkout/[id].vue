<template>
  <NuxtLayout name="main">
    <div class="w-full flex justify-center">
      <div class="w-full flex max-w-screen-lg py-16">
        <form class="gap-24 w-full text-black grid grid-cols-2 px-10">
          <div class="flex flex-col gap-5">
            <h2 class="font-bold text-3xl">Billing details</h2>
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">First Name</label>
                <input
                  type="text"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold"
                  >Company Name (Optional)</label
                >
                <input
                  type="text"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Country</label>
                <select class="px-2 py-4 rounded-md border-2 border-gray-400">
                  <option value="" selected>Sri Lanka</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Street address</label>
                <input
                  type="text"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Town / City</label>
                <input
                  type="text"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">Phone</label>
                <input
                  type="tel"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="font-semibold">ZIP-code</label>
                <input
                  type="number"
                  class="px-2 py-4 rounded-md border-2 border-gray-400"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex border-b-2 border-gray-300 pb-5 justify-between">
              <div class="flex flex-col gap-3 justify-between">
                <h2 class="text-2xl font-semibold pb-1">Product</h2>
                <p class="text-sm">
                  <span class="text-gray-400">Asgaard sofa</span> <b>X 1</b>
                </p>
                <span>Total</span>
              </div>
              <div class="flex flex-col justify-between items-end">
                <h2 class="text-2xl font-semibold pb-1">Subtotal</h2>
                <span class="text-2xl font-bold text-yellow-400"
                  >RU 250,000.00</span
                >
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex">
                <div class="flex items-center h-5">
                  <input
                    id="helper-radio"
                    aria-describedby="helper-radio-text"
                    type="radio"
                    disabled
                    class="w-4 h-4 text-yellow-300 bg-yellow-200 border-yellow-500"
                  />
                </div>
                <div class="ms-2 text-sm">
                  <label for="helper-radio" class="font-medium text-gray-900"
                    >Cash on Delivery</label
                  >
                  <p
                    id="helper-radio-text"
                    class="text-xs font-normal text-gray-500"
                  >
                    Make your purchase after delivery according to your given
                    address.
                  </p>
                </div>
              </div>

              <MyButtonMain class="self-end mt-3 w-1/2"
                >Place order</MyButtonMain
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
