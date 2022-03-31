<script setup lang="ts">
import { reactive } from "vue";
const loginInfo = reactive({
  user: "",
  password: "",
});
</script>
<template>
  <view class="login-container">
    <input type="text" v-model="loginInfo.user" />
    <input type="password" v-model="loginInfo.password" />
  </view>
</template>
<style scoped lang="scss">
.login-container {
  color: #ffffff;
}
</style>
