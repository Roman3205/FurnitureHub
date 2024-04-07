<template>
  <div class="site">
    <TheMainBannerTop />
    <slot />
    <div class="footer flex items-end"><TheMainBannerBottom /></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.layout {
  background: url("/images/layout.png") no-repeat center center;
  background-size: 100%;
}
</style>
