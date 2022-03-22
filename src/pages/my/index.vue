<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ store.value }}11122555</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import {useUserStore} from "../../store";
const store = useUserStore()
</script>

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
