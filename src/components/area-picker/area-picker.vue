<script setup lang="ts">
import { ref, defineExpose, watch, onMounted } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "123",
  },
  cancelText: {
    type: String,
    default: "取消",
  },
  confirmText: {
    type: String,
    default: "确定",
  },
});
const emit = defineEmits(["close", "confirm"]);
const popupRef = ref<any>(null);
const years = ref<number[]>([]);
const months = ref<number[]>([]);
const days = ref<number[]>([]);
const visible = ref(true);
const indicatorStyle = ref(`height: 50px;`);
const value = ref<number[]>([]);
function getData() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  for (let i = 1990; i <= date.getFullYear(); i++) {
    years.value.push(i);
  }
  for (let i = 1; i <= 12; i++) {
    months.value.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    days.value.push(i);
  }
  value.value = [9999, month - 1, day - 1];
}
function bindChange(e: any) {
  const val = e.detail.value;
}

onMounted(() => {
  getData();
});
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      popupRef.value.open();
    } else {
      popupRef.value.close();
    }
  }
);

function close() {
  emit("close");
}
function confirm() {
  emit("confirm");
}

defineExpose({
  open,
});
</script>
<template>
  <uni-popup type="bottom" ref="popupRef" :mask-click="false">
    <view class="wrap">
      <view class="header">
        <view class="left ml5" @click="close">{{ cancelText }}</view>
        <view class="center">{{ title }}</view>
        <view class="right mr5" @click="confirm">{{ confirmText }}</view>
      </view>
      <picker-view
        v-if="visible"
        :indicator-style="indicatorStyle"
        :value="value"
        @change="bindChange"
        class="picker-view"
      >
        <picker-view-column>
          <view class="item" v-for="(item, index) in years" :key="index"
            >{{ item }}年</view
          >
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in months" :key="index"
            >{{ item }}月</view
          >
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="(item, index) in days" :key="index"
            >{{ item }}日</view
          >
        </picker-view-column>
      </picker-view>
    </view>
  </uni-popup>
</template>

<style scoped lang="scss">
.wrap {
  background-color: #fff;
  .header {
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
