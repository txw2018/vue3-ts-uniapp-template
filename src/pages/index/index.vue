<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ store.getValue }}</text>
      <button @click="changeValue">切換</button>
      <button @click="share">分享</button>
    </view>
    <text></text>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
const store = useUserStore()

function changeValue() {
  store.changeValue()
}
function share() {
  console.log(123)
}
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
  flex-direction: column;
}

.title {
  font-size: 36rpx;
  color: $uni-text-color-grey;
}
</style>
