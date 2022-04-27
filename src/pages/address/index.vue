<script setup lang="ts">
import { ref } from "vue";
import AreaList from "./data";
import type { AreaColumnOption } from "@/components/area-picker/types";
import areaPicker from "@/components/area-picker/area-picker.vue";
const areaPickerRef = ref<InstanceType<typeof areaPicker> | null>(null);
const showArea = ref(false);
const opneArea = () => {
  showArea.value = true;
};
const confirm = (val: AreaColumnOption[]) => {
  showArea.value = false;
  console.log(val);
};
const reset = () => {
  areaPickerRef.value!.reset();
};
</script>
<template>
  <view>
    <button @click="opneArea">打开地址</button>
    <button @click="reset">清除地址</button>
    <area-picker
      ref="areaPickerRef"
      @confirm="confirm"
      v-model:show="showArea"
      code="999900997"
      :area-list="AreaList"
    />
  </view>
</template>

<style scoped lang="scss"></style>
