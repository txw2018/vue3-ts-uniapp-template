<script lang="ts" setup>
import { watch, ref } from "vue";
import Props from "./props";
const props = defineProps(Props);
const emit = defineEmits(["error", "load"]);
const isError = ref(false);
const loading = ref(true);

watch(
  () => props.src,
  (newVal) => {
    if (!newVal) {
      isError.value = true;
    } else {
      isError.value = false;
      loading.value = true;
    }
  },
  {
    immediate: true,
  }
);
//加载失败
function onErrorHandler(err: Event) {
  loading.value = false;
  isError.value = true;
  emit("error", err);
}
//加载成功
function onLoadHandler() {
  loading.value = false;
  isError.value = false;
  emit("load");
}
</script>
<template>
  <view class="img-container">
    <image
      v-if="!isError"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      :show-menu-by-longpress="showMenuByLongpress"
      @error="onErrorHandler"
      @load="onLoadHandler"
    />
    <view v-if="loading">
      <slot name="loading"> loading</slot>
    </view>
    <view v-if="isError">
      <slot name="error">error</slot>
    </view>
  </view>
</template>
<style lang="scss" scoped></style>
