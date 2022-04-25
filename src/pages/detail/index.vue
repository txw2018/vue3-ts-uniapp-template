<script setup lang="ts">
import { ref } from "vue";

const showArea = ref(false);
function opneArea() {
  showArea.value = true;
}
</script>
<template>
  <view>
    <button @click="opneArea">打开地址</button>
    <area-picker :show="showArea" />
  </view>
</template>

<style scoped lang="scss"></style>
