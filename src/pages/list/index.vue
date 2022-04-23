<script setup lang="ts">
import { images } from "@/utils/mock";
import { ref } from "vue";

const imgList = ref(images);
</script>

<template>
  <view class="content">
    <lazy-image v-for="img in imgList" :key="img" :src="img" radius="50%" />
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
