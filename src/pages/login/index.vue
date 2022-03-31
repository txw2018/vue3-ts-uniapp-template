<script setup lang="ts">
import { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE } from "@/utils/constants";
import { postPhoneLogin, postVerificationCode } from "@/api/user";
import { reactive } from "vue";
const loginInfo = reactive({
  username: "",
  password: "",
});
//验证码登录
async function onLogin() {
  postPhoneLogin({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: GRANT_TYPE,
    captcha_id: "",
    captcha_code: "",
    source: 2,
    type: 2,
    ...loginInfo,
  })
    .then(({ data }) => {
      uni.setStorageSync("yq_token", data.access_token);
      uni.setStorageSync("yq_refresh", data.refresh_token);
      uni.setStorageSync("yq_cross", data.cross_token);
    })
    .catch((error) => {
      const errMsg = error.data.error.errors
        ? error.data.error.errors[0].field
        : "";
      console.log(errMsg);
    });
}
//获取验证码
async function getVerificationCode() {
  const result = await postVerificationCode(loginInfo.username);
  console.log(result, 3333);
}
console.log(import.meta.env, 123);
</script>
<template>
  <view class="login-container">
    <input type="text" v-model="loginInfo.username" />
    <input type="password" v-model="loginInfo.password" />
    <button @click="getVerificationCode">获取验证码</button>
    <button @click="onLogin">登录</button>
  </view>
</template>
<style scoped lang="scss">
.login-container {
  width: 100%;
}
</style>
