<template>
  <div class="w-full flex justify-center">
    <div class="max-w-screen-lg w-full text-black flex flex-col">
      <div class="grid grid-cols-5 py-8">
        <div class="self-center col-span-2">
          <p class="text-gray-400 w-2/3">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <ul class="flex flex-col gap-6">
          <li class="mb-2 text-gray-400">Links</li>
          <li>
            <NuxtLink to="/home/shop">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/home/shop">Shop</NuxtLink>
          </li>
        </ul>
        <ul class="flex flex-col gap-6">
          <li class="mb-2 text-gray-400">Help</li>
          <li>
            <NuxtLink
              to="https://policies.google.com/privacy?hl=en"
              target="_black"
              >Privacy Policies</NuxtLink
            >
          </li>
        </ul>
        <div class="flex flex-col self-start gap-5">
          <span class="mb-2 text-gray-400">Newsletter</span>

          <UForm
            :state="form"
            :schema="subscribeMailSchema"
            @submit="handleSubcribe"
            class="flex gap-3 flex-col items-center"
          >
            <UFormGroup name="email">
              <input
                v-model="form.email"
                class="p-2 rounded-md bg-transparent border-b-2 text-sm border-gray-300 focus:outline-none active:outline-none hover:opacity-60 duration-300 transition"
                placeholder="Enter Your Email Address"
              />
            </UFormGroup>
            <button
              type="submit"
              :disabled="blockButton || status !== 'authenticated'"
              class="uppercase text-xs py-2.5 border-b-2 w-2/5 border-gray-700"
            >
              subscribe
            </button>
          </UForm>
        </div>
      </div>
      <div class="py-5 border-t-2 border-slate-200">
        <span class="text-sm">2024 FurnitureHub. All rights reverved</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";
import { subscribeMailSchema } from "~/schemas/subscribeMailSchema.ts";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
const store = useUserStore();
const { status } = useAuth();

const form = reactive<{ email: string | undefined }>({ email: undefined });
const { $toast } = useNuxtApp();
const blockButton = ref<boolean>(false);
const handleSubcribe = async (
  event: FormSubmitEvent<z.output<typeof subscribeMailSchema>>
) => {
  try {
    blockButton.value = true;
    await $fetch("/api/subscribe", {
      method: "POST",
      body: event.data,
    });
    return $toast.success("You have subscribed on news!");
  } catch (e) {
    return $toast.error(`Bad subscribe action`);
  } finally {
    form.email = undefined;
    await store.loadUser();

    blockButton.value = false;
  }
};
</script>

<style></style>
