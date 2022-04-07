import { PropType } from "vue";
// iamge组件详情 https://uniapp.dcloud.net.cn/component/image.html
type modeType =
  | "scaleToFill"
  | "aspectFit"
  | "aspectFill"
  | "widthFix"
  | "heightFix"
  | "top"
  | "bottom"
  | "center"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";
export default {
  // 图片地址
  src: {
    type: String,
    required: true,
  },
  // 裁剪模式
  mode: {
    type: String as PropType<modeType>,
    default: "aspectFill",
  },
  // 宽度，单位任意，如果为数值，则为px单位 （默认 '300' ）
  width: {
    type: [String, Number],
    default: 300,
  },
  // 高度，单位任意，如果为数值，则为px单位 （默认 '225' ）
  height: {
    type: [String, Number],
    default: 225,
  },
  // 圆角值，单位任意，如果为数值，则为px单位 （默认 0 ）
  radius: {
    type: [String, Number],
  },
  // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
  lazyLoad: {
    type: Boolean,
    default: true,
  },
  // 开启长按图片显示识别微信小程序码菜单
  showMenuByLongpress: {
    type: Boolean,
    default: true,
  },
  // 是否显示加载中的图标或者自定义的slot
  showLoading: {
    type: Boolean,
    default: true,
  },
  // 是否显示加载错误的图标或者自定义的slot
  showError: {
    type: Boolean,
    default: true,
  },
};
