<script lang="ts" setup>
import { watch, ref, computed, type CSSProperties } from "vue";
import Props from "./props";
import { addUnit } from "@/utils/format";
import { isDef } from "@/utils/validate";
const props = defineProps(Props);
const emit = defineEmits(["error", "load"]);
const error = ref(false);
const loading = ref(true);

watch(
  () => props.src,
  (newVal) => {
    if (!newVal) {
      error.value = true;
    } else {
      error.value = false;
      loading.value = true;
    }
  },
  {
    immediate: true,
  }
);

const style = computed(() => {
  const style: CSSProperties = {
    width: addUnit(props.width),
    height: addUnit(props.height),
  };
  if (isDef(props.radius)) {
    style.overflow = "hidden";
    style.borderRadius = addUnit(props.radius);
  }
  return style;
});

//加载失败
function onErrorHandler(err: Event) {
  loading.value = false;
  error.value = true;
  emit("error", err);
}
//加载成功
function onLoadHandler() {
  loading.value = false;
  error.value = false;
  emit("load");
}
</script>
<template>
  <view class="lazy-image" :style="style">
    <image
      v-if="!error"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      :show-menu-by-longpress="showMenuByLongpress"
      @error="onErrorHandler"
      @load="onLoadHandler"
    />
    <view v-if="showLoading && loading">
      <slot name="loading"> <uni-icons type="spinner-cycle" size="30" /></slot>
    </view>
    <view v-if="showError && error">
      <slot name="error"><uni-icons type="image" size="30" /></slot>
    </view>
  </view>
</template>
<style lang="scss" scoped></style>
