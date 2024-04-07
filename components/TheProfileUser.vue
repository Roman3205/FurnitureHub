<template>
  <section class="flex flex-col gap-3">
    <h2 class="text-black text-2xl font-semibold">Account Details</h2>
    <UForm
      :state="form"
      :schema="nameChangeSchema"
      @submit="handleChangeName"
      class="w-full flex-col flex gap-1"
    >
      <label for="" class="text-slate-600 uppercase">name *</label>
      <UFormGroup name="name">
        <input
          v-model.trim="form.name"
          class="w-full text-slate-500 rounded-md p-2 border-2 border-gray-300"
          placeholder="Name"
          type="text"
        />
      </UFormGroup>
      <MyButtonMain type="submit" :disabled="blockButton" class="w-1/5 mt-5"
        >Update name</MyButtonMain
      >
    </UForm>
  </section>
</template>

<script lang="ts" setup>
import { z } from "zod";
import { nameChangeSchema } from "~/schemas/nameChangeSchema.ts";
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
const store = useUserStore();

const form = reactive<{ name: string | undefined }>({ name: undefined });
const { $toast } = useNuxtApp();
const blockButton = ref<boolean>(false);
const handleChangeName = async (
  event: FormSubmitEvent<z.output<typeof nameChangeSchema>>
) => {
  try {
    blockButton.value = true;
    await $fetch("/api/change-name", {
      method: "POST",
      body: event.data,
    });
    return $toast.success("You have changed your old name!");
  } catch (e) {
    return $toast.error("Bad name change");
  } finally {
    form.name = undefined;
    // reloadNuxtApp({
    //   path: useRoute().fullPath,
    // });
    await store.loadUser();

    blockButton.value = false;
  }
};
</script>

<style></style>
