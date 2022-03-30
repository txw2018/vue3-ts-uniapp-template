<script setup lang="ts">
import { ref } from "vue";

const name = ref(0);
function show() {
  console.log(123);
}
</script>
<template>
  <view class="content">
    <view class="text-area">
      <text>{{ name }}</text>
      <button @click="show">show</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: $uni-text-color-grey;
}
</style>
