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
import { useUserStore } from '../../store/user.ts'
const store = useUserStore()
console.log(import.meta.env, 123)

function changeValue() {
  store.changeValue()
}

function share() {
  uni.share({
    provider: 'weixin', // 分享服务提供商（即weixin|qq|sinaweibo）
    scene: 'WXSceneSession', // 分享到聊天界面
    type: 5, // 分享形式 5:小程序
    imageUrl: 'https://img.tw-yun.com/86yqy/product/yss1120282-1.jpg', // 官方规定分享图比例是5：4,其它尺寸可能显示不全。
    title: '欢迎体验uniapp',
    miniProgram: {
      id: 'gh_88dfc3cf0ebe', // 微信小程序原始id
      path: 'pages/index/index', // 点击链接进入的页面
      type: 0, // 微信小程序版本类型，可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。
      webUrl: 'http://uniapp.dcloud.io', // 兼容低版本的网页链接
    },
    success: (ret) => {
      uni.showToast({
        title: JSON.stringify(ret),
        duration: 2000,
      })
    },
    fail: function (err) {
      uni.showModal({
        content: JSON.stringify(err),
        duration: 2000,
      })
    },
  })
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
