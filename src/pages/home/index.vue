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
    <uni-nav-bar
      statusBar
      :border="false"
      backgroundColor="rgba(255, 255, 255, 0)"
      title="首页"
    />
    <view>
      <text>realname:{{ userInfo.realname }}</text>
    </view>
    <button @click="goLogin">去登录</button>
  </view>
</template>

<style scoped lang="scss">
.home {
  background-image: url("https://cdn0.86yqy.com/weapp-img/special.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ::v-deep {
    .uni-navbar {
      width: 100vw;
    }
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
