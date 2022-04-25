import LazyImage from "@/components/lazy-image/lazy-image.vue";
import AreaPicker from "@/components/area-picker/area-picker.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    LazyImage: typeof LazyImage;
    AreaPicker: typeof AreaPicker;
  }
}
