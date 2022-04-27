<script setup lang="ts">
import {
  ref,
  watch,
  onMounted,
  onDeactivated,
  onActivated,
  computed,
  reactive,
  PropType,
  nextTick,
} from "vue";
// Types
import type {
  AreaList,
  AreaColumnType,
  AreaColumnOption,
  StateType,
} from "./types";
const props = defineProps({
  //是否展示
  show: {
    type: Boolean,
    default: false,
  },
  //	当前选中项对应的地区码
  code: String,
  //省市区地址列表
  areaList: {
    type: Object as PropType<AreaList>,
    default: () => ({}),
  },
  // 点击遮罩关闭
  maskClick: {
    type: Boolean,
    default: true,
  },
  // 标题
  title: {
    type: String,
    default: "",
  },
  // 取消文案
  cancelText: {
    type: String,
    default: "取消",
  },
  // 确定文档
  confirmText: {
    type: String,
    default: "确定",
  },
});
const emit = defineEmits<{
  (e: "open"): void;
  (e: "close"): void;
  (e: "confirm", value: AreaColumnOption[]): void;
  (e: "change", event: any): void;
  (e: "update:show", val: boolean): void;
}>();
let shouldReopen: boolean;
const popupRef = ref<any>(null);
let region = ref([0, 0, 0]);
const state = reactive<StateType>({
  code: props.code,
  province: [],
  city: [],
  county: [],
});
const areaList = computed(() => {
  const { areaList } = props;
  return {
    province: areaList.province_list || {},
    city: areaList.city_list || {},
    county: areaList.county_list || {},
  };
});
const bindChange = (e: any) => {
  let val = e.detail.value;
  if (region.value[0] !== val[0]) {
    //滚动第一个
    region.value = [val[0], 0, 0];
    state.code = state.province[val[0]].code;
  } else if (region.value[1] !== val[1]) {
    //滚动第二个
    region.value = [val[0], val[1], 0];
    state.code = state.city[val[1]].code;
  } else {
    //滚动第三个
    region.value = val;
    state.code = state.county[val[2]].code;
  }
  setValues();
  emit("change", e);
};
const open = () => {
  emit("open");
};
const close = () => {
  emit("close");
  emit("update:show", false);
};
const confirm = () => {
  setValues();
  emit("confirm", parseValues());
};
const parseValues = () => {
  const regionVal = region.value;
  const { province, city, county } = state;
  const provinceVal = province[regionVal[0]];
  const cityVal = city[regionVal[1]];
  const countyVal = county[regionVal[2]];
  return [provinceVal, cityVal, countyVal];
};
const popupChange = (e: any) => {
  if (e.show) {
    emit("update:show", true);
  } else {
    emit("update:show", false);
  }
};
const getDefaultCode = () => {
  const { county, city } = areaList.value;
  const countyCodes = Object.keys(county);
  if (countyCodes[0]) {
    return countyCodes[0];
  }
  const cityCodes = Object.keys(city);
  if (cityCodes[0]) {
    return cityCodes[0];
  }
  return "";
};
const getColumnValues = (type: AreaColumnType, code?: string) => {
  let column: AreaColumnOption[] = [];
  if (type !== "province" && !code) {
    return column;
  }
  const list = areaList.value[type];
  column = Object.keys(list).map((listCode) => ({
    code: listCode,
    name: list[listCode],
  }));
  if (code) {
    column = column.filter((item) => item.code.startsWith(code));
  }
  return column;
};
const setValues = () => {
  let code = state.code || getDefaultCode();
  const province = getColumnValues("province");
  const city = getColumnValues("city", code.slice(0, 2));
  //如果code是省份编码
  if (city.length && code.slice(2, 4) === "00") {
    [{ code }] = city;
  }
  const countyCode = code.length === 9 ? code.slice(0, 6) : code.slice(0, 4);
  const county = getColumnValues("county", countyCode);
  state.province = province!;
  state.city = city!;
  state.county = county!;
  setIndexs([
    getIndex("province", code),
    getIndex("city", code),
    getIndex("county", code),
  ]);
};
const setIndexs = async (indexs: number[]) => {
  await nextTick();
  region.value = indexs;
};
const getIndex = (type: AreaColumnType, code: string): number => {
  let compareNum = code.length;
  if (type === "province") {
    compareNum = 2;
  }
  if (type === "city") {
    compareNum = 4;
  }
  code = code.slice(0, compareNum);
  const list = getColumnValues(
    type,
    compareNum > 2 ? code.slice(0, compareNum - 2) : ""
  );
  for (let i = 0; i < list.length; i++) {
    if (list[i].code.slice(0, compareNum) === code) {
      return i;
    }
  }
  return 0;
};
const reset = (newCode = "") => {
  state.code = newCode;
  setValues();
};
onMounted(() => {
  setValues();
  open();
});
onActivated(() => {
  if (shouldReopen) {
    emit("update:show", true);
    shouldReopen = false;
  }
});
onDeactivated(() => {
  if (props.show) {
    close();
    shouldReopen = true;
  }
});
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      popupRef.value.open();
      open();
    } else {
      popupRef.value.close();
      emit("close");
    }
  }
);
watch(
  () => props.code,
  (value) => {
    state.code = value;
    setValues();
  }
);
defineExpose({
  reset,
});
</script>
<template>
  <uni-popup
    type="bottom"
    @change="popupChange"
    ref="popupRef"
    :mask-click="maskClick"
  >
    <view class="wrap">
      <view class="header">
        <view class="left ml5" @click="close">{{ cancelText }}</view>
        <view class="center">{{ title }}</view>
        <view class="right mr5" @click="confirm">{{ confirmText }}</view>
      </view>
      <picker-view
        indicator-class="indicatorClass"
        :value="region"
        @change="bindChange"
        class="picker-view"
      >
        <picker-view-column>
          <view class="item" v-for="item of state.province" :key="item.code">{{
            item.name
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="item of state.city" :key="item.code">{{
            item.name
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view class="item" v-for="item of state.county" :key="item.code">{{
            item.name
          }}</view>
        </picker-view-column>
      </picker-view>
    </view>
  </uni-popup>
</template>

<style scoped lang="scss">
.wrap {
  background-color: #fff;
  padding-bottom: 80rpx;
  .header {
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .picker-view {
    height: 600rpx;
    .item {
      @include center();
    }
  }
  .indicatorClass {
    height: 88rpx;
  }
}
</style>
