<script lang="ts" setup>
import Props from "./props";
defineProps(Props);
</script>
<template>
  <view>
    <image :src="src" :mode="mode" :lazy-load="lazyLoad" />
  </view>
</template>
<style lang="scss" scoped></style>
