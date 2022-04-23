<script setup lang="ts">
import { computed, CSSProperties, ref } from "vue";
import { images } from "@/utils/mock";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

function goLogin() {
  uni.navigateTo({
    url: "/pages/login/index",
  });
}
const getRealName = computed(() => userStore.getReaname);

const theme = {
  color: "red",
  bgImg: images[0],
};
const homeStyle = computed<CSSProperties>(() => ({
  backgroundImage: `url(${theme.bgImg})`,
}));
</script>
<template>
  <view class="home" :style="homeStyle">
    <uni-nav-bar
      statusBar
      :border="false"
      backgroundColor="rgba(255, 255, 255, 0)"
      title="首页"
    />
    <view>
      <text class="realname">realname:{{ getRealName }}</text>
    </view>
    <button @click="goLogin">去登录</button>
  </view>
</template>

<style scoped lang="scss">
.home {
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
