<template>
  <NuxtLayout name="main">
    <div class="w-full flex justify-center">
      <div class="w-full max-w-screen-lg flex py-12 justify-center">
        <div
          class="flex flex-col gap-4 w-2/4 border-2 rounded-lg px-6 pt-5 pb-7"
        >
          <h1 class="font-semibold text-3xl">Log In</h1>
          <UForm
            :state="form"
            :schema="loginSchema"
            @submit="handleLogin"
            class="flex flex-col gap-5 w-full text-black"
          >
            <div class="flex flex-col gap-2">
              <label for="" class="font-semibold">Email address</label>
              <UFormGroup name="email">
                <input
                  type="email"
                  v-model.trim="form.email"
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
            <div class="flex items-center">
              <MyButtonMain type="submit" :disabled="blockButton" class="w-1/2"
                >Log In</MyButtonMain
              >
              <NuxtLink to="/home/account/register" class="text-right underline"
                >Нет аккаунта? Зарегистрируйтесь.</NuxtLink
              >
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { loginSchema } from "~/schemas/loginSchema.ts";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { z } from "zod";

definePageMeta({
  middleware: "guest",
});

const form = reactive<{
  email: string | undefined;
  password: string | undefined;
}>({
  email: undefined,
  password: undefined,
});
const { $toast } = useNuxtApp();
const { signIn } = useAuth();

const blockButton = ref<boolean>(false);
const handleLogin = async (
  event: FormSubmitEvent<z.output<typeof loginSchema>>
) => {
  try {
    blockButton.value = true;
    const { error } = await signIn("credentials", {
      ...event.data,
      redirect: false,
    });
    if (error) {
      return $toast.error("Error to login");
    }
    $toast.success("You have been logged in successfully!");
    await new Promise((prom) => setTimeout(prom, 2000));
    return navigateTo("/home", { redirectCode: 200 });
  } catch (e) {
    return $toast.error("Bad request during login");
  } finally {
    form.email = undefined;
    form.password = undefined;
    blockButton.value;
  }
};
</script>

<style></style>
