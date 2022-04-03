<script setup lang="ts">
import { computed, watch } from "vue";
const props = defineProps({
  title: { type: String, default: "Vue" },
  likes: { type: Number, default: 1 },
});
const newTile = computed(() => "hello" + props.title);
watch(
  () => props.likes,
  (newValue) => {
    console.log(newValue);
  }
);
</script>
<template>
  <view>
    <text>
      {{ newTile }}
    </text>
  </view>
</template>
<style scoped lang="scss"></style>
