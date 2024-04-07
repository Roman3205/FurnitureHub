<template>
  <section class="flex flex-col gap-3">
    <h2 class="text-black text-2xl font-semibold">Password</h2>
    <UForm
      :state="form"
      :schema="passChangeSchema"
      @submit="handleChangePassword"
      class="text-black w-full flex-col flex gap-4"
    >
      <div>
        <label for="" class="text-slate-600 uppercase">old password</label>
        <UFormGroup name="oldPassword">
          <input
            v-model.trim="form.oldPassword"
            class="w-full text-slate-500 rounded-md p-2 border-2 border-gray-300"
            placeholder="Old password"
            type="password"
          />
        </UFormGroup>
      </div>
      <div>
        <label for="" class="text-slate-600 uppercase">new password</label>
        <UFormGroup name="newPassword">
          <input
            v-model.trim="form.newPassword"
            class="w-full text-slate-500 rounded-md p-2 border-2 border-gray-300"
            placeholder="New password"
            type="password"
          />
        </UFormGroup>
      </div>
      <div>
        <label for="" class="text-slate-600 uppercase"
          >repeat new password</label
        >
        <UFormGroup name="confirmPassword">
          <input
            v-model.trim="form.confirmPassword"
            class="w-full text-slate-500 rounded-md p-2 border-2 border-gray-300"
            placeholder="Repeat new password"
            type="password"
          />
        </UFormGroup>
      </div>
      <MyButtonMain type="submit" :disabled="blockButton" class="w-1/5 mt-5"
        >Save Password</MyButtonMain
      >
    </UForm>
  </section>
</template>

<script lang="ts" setup>
import { z } from "zod";
import { passChangeSchema } from "~/schemas/passChangeSchema.ts";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const form = reactive<{
  oldPassword: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;
}>({
  oldPassword: undefined,
  newPassword: undefined,
  confirmPassword: undefined,
});

const { $toast } = useNuxtApp();
const blockButton = ref<boolean>(false);
const handleChangePassword = async (
  event: FormSubmitEvent<z.output<typeof passChangeSchema>>
) => {
  try {
    blockButton.value = true;
    await $fetch("/api/change-password", {
      method: "POST",
      body: event.data,
    });
    return $toast.success("You have changed your old password!");
  } catch (e) {
    return $toast.error("Bad password change");
  } finally {
    form.oldPassword = undefined;
    form.newPassword = undefined;
    form.confirmPassword = undefined;
    blockButton.value = false;
  }
};
</script>

<style></style>
