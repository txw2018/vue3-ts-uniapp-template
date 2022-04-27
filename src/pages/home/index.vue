<script setup lang="ts">
import { ref } from "vue";
import { getUser } from "@/api/user";
import { onShow } from "@dcloudio/uni-app";
import useStorageSync from "@/hooks/useStorageSync";

function goLogin() {
  uni.navigateTo({
    url: "/pages/login/index",
  });
}
const userInfo = ref<any>({});
async function getUserInfo() {
  const { data } = await getUser();
  userInfo.value = data;
  const { data: token } = useStorageSync("token123", 1231);
  console.log(token.value);
}

onShow(() => {
  getUserInfo();
});
const theme = {
  color: "red",
};

function openArea() {
  uni.navigateTo({
    url: "/pages/detail/index",
  });
}
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
      <text class="realname">realname:{{ userInfo.realname }}</text>
    </view>
    <button @click="goLogin">去登录</button>
    <button @click="openArea">打开地址</button>
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

.realname {
  @include center();
  color: v-bind("theme.color");
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
