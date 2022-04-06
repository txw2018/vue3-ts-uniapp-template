<script setup lang="ts">
import { ref } from "vue";
// import LazyImage from "@/components/base/lazy-image/lazy-image.vue";

const imgList = ref([
  "https://cdn0.86yqy.com/weapp-img/special.png",
  "https://cdn0.86yqy.com/weapp-img/alerts.png",
  "https://cdn0.86yqy.com/weapp-img/address.png",
  "https://cdn0.86yqy.com/weapp-img/claimed-btn.png",
  "https://cdn0.86yqy.com/weapp-img/combination.png",
  "https://cdn0.86yqy.com/weapp-img/coupon-center.png",
  "https://cdn0.86yqy.com/weapp-img/full-up111.png",
  "https://cdn0.86yqy.com/weapp-img/goods-default.png",
  "https://cdn0.86yqy.com/weapp-img/group-buying.png",
  "https://cdn0.86yqy.com/weapp-img/invite_people.png",
  "https://cdn0.86yqy.com/weapp-img/letter.png",
  "https://cdn0.86yqy.com/weapp-img/no-data.png",
  "https://cdn0.86yqy.com/weapp-img/redemption.png",
  "https://cdn0.86yqy.com/weapp-img/search-default.png",
]);
</script>

<template>
  <view class="content">
    <lazy-image v-for="img in imgList" :key="img" :src="img" lazy-load />
  </view>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
