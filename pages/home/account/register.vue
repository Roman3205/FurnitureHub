<template>
  <NuxtLayout name="main">
    <div class="w-full flex justify-center">
      <div class="w-full max-w-screen-lg flex py-12 justify-center">
        <div
          class="flex flex-col gap-4 w-2/4 border-2 rounded-lg px-6 pt-5 pb-7"
        >
          <h1 class="font-semibold text-3xl">Register</h1>
          <UForm
            :state="form"
            :schema="registerSchema"
            @submit="handleRegister"
            class="flex flex-col gap-5 w-full text-black"
          >
            <div class="flex flex-col gap-2">
              <label for="" class="font-semibold">Name</label>
              <UFormGroup name="name">
                <input
                  type="text"
                  v-model.trim="form.name"
                  class="px-2 w-full py-4 rounded-md border-2 border-gray-400"
                />
              </UFormGroup>
            </div>
            <div class="flex flex-col gap-2">
              <label for="" class="font-semibold">Email address</label>
              <UFormGroup name="email">
                <input
                  v-model.trim="form.email"
                  type="email"
                  class="px-2 w-full py-4 rounded-md border-2 border-gray-400"
                />
              </UFormGroup>
            </div>
            <div class="flex flex-col gap-2">
              <label for="" class="font-semibold">Password</label>
              <UFormGroup name="password">
                <input
                  v-model.trim="form.password"
                  type="password"
                  class="px-2 w-full py-4 rounded-md border-2 border-gray-400"
                />
              </UFormGroup>
            </div>
            <div class="flex flex-col gap-2">
              <label for="" class="font-semibold">Confirm password</label>
              <UFormGroup name="password">
                <input
                  v-model.trim="form.confirmPassword"
                  type="password"
                  class="px-2 w-full py-4 rounded-md border-2 border-gray-400"
                />
              </UFormGroup>
            </div>
            <div class="w-full pb-1">
              <span class="pb-1 break-words break-all">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </span>
            </div>
            <MyButtonMain
              type="submit"
              :disabled="blockButton"
              class="w-1/2 mt-3"
              >Register</MyButtonMain
            >
          </UForm>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { z } from "zod";
import { registerSchema } from "~/schemas/registerSchema.ts";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

definePageMeta({
  middleware: "guest",
});

const form = reactive<{
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}>({
  name: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
});

const { $toast } = useNuxtApp();
const blockButton = ref<boolean>(false);
const handleRegister = async (
  event: FormSubmitEvent<z.output<typeof registerSchema>>
) => {
  try {
    blockButton.value = true;
    await $fetch("/api/auth/register", {
      method: "POST",
      body: event.data,
    });
    $toast.success("You have been registered successfully!");
    await new Promise((prom) => setTimeout(prom, 2000));

    return navigateTo("/home/account/login", {
      redirectCode: 200,
    });
  } catch (e) {
    return $toast.error("Bad request during registration");
  } finally {
    form.name = undefined;
    form.email = undefined;
    form.password = undefined;
    form.confirmPassword = undefined;
    blockButton.value = false;
  }
};
</script>

<style></style>
