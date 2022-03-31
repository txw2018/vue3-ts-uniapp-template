<script setup lang="ts">
import { useUserStore } from "@/store/user";
import SvgIcon from "@/components/base/svg-icon.vue";
const store = useUserStore();

function changeValue() {
  store.changeValue();
}
function share() {
  console.log(1232);
}
function bindClick() {
  console.log(123);
}
</script>
<template>
  <view class="home">
    <uni-nav-bar shadow left-icon="left">
      <view>标题栏</view>
    </uni-nav-bar>
    <view class="text-area">
      <text class="title">{{ store.getValue }}</text>
      <button @click="changeValue">切換</button>
      <button @click="share">分享</button>
    </view>
    <svg-icon name="123" />
    <uni-badge text="2" type="success" @click="bindClick" />
  </view>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .uni-navbar {
    width: 100%;
  }
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
  .title {
    font-size: 36rpx;
    color: $uni-text-color-grey;
  }
}
</style>
