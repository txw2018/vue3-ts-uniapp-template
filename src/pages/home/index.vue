<script setup lang="ts">
import { ref } from "vue";
import { getUser } from "@/api/user";
import { onShow } from "@dcloudio/uni-app";

function goLogin() {
  uni.navigateTo({
    url: "/pages/login/index",
  });
}
const userInfo = ref<any>({});
async function getUserInfo() {
  const { data } = await getUser();
  userInfo.value = data;
}
onShow(() => {
  getUserInfo();
});
</script>
<template>
  <view class="home">
    <uni-nav-bar shadow left-icon="left" :statusBar="true">
      <view>标题栏</view>
    </uni-nav-bar>
    <view>
      <text>realname:{{ userInfo.realname }}</text>
    </view>
    <view class="text-area" />
    <button @click="goLogin">去登录</button>
  </view>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::v-deep .uni-navbar {
    width: 100vw;
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
