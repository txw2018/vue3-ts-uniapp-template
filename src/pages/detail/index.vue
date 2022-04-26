<script setup lang="ts">
import { ref } from "vue";
import AreaList from "./data";
import type { AreaColumnOption } from "@/components/area-picker/types";
const showArea = ref(false);
function opneArea() {
  showArea.value = true;
}
function confirm(val: AreaColumnOption[]) {
  showArea.value = false;
  console.log(val);
}
</script>
<template>
  <view>
    <button @click="opneArea">打开地址</button>
    <area-picker
      @confirm="confirm"
      v-model:show="showArea"
      :area-list="AreaList"
    />
  </view>
</template>

<style scoped lang="scss"></style>
