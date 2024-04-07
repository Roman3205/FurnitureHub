<template>
  <div>
    <select
      class="text-sm rounded-md w-fit bg-gray-200 border-0"
      name="switcher"
      v-model="language"
    >
      <option
        v-for="locale in locales"
        :key="typeof locale === 'object' ? locale.code : locale"
        :value="typeof locale === 'object' ? locale.code : locale"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style></style>
