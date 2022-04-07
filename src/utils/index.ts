import { type AnyFunc } from "./basic";
/**
 * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
 * @param {number} value 堵塞时间 单位ms 毫秒
 * @returns {Promise} 返回promise
 */
export function sleep(value = 30): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, value);
  });
}
/**
 * @description 如果value小于min，取min；如果value大于max，取max
 * @param {number} min
 * @param {number} max
 * @param {number} value
 */
export function range(min = 0, max = 0, value = 0) {
  return Math.max(min, Math.min(max, Number(value)));
}
/**
 * @description 节流函数
 * @param {number} fn 需要包装的事件回调
 * @param {number} delay 时间间隔的阈值
 */
export function throttle(fn: AnyFunc, delay: number) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0,
    timer: number | undefined = undefined;
  // 将throttle处理结果当作函数返回

  return function (this: unknown, ...args: any[]) {
    // 保留调用时的this上下文
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    // 保留调用时传入的参数
    // 记录本次触发回调的时间
    const now = +new Date();

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
      last = now;
      fn.apply(context, args);
    }
  };
}
/**
 * @description 防抖函数
 * @param {number} fn 需要包装的事件回调
 * @param {number} delay 时间间隔的阈值
 */
export function debounce(fn: AnyFunc, delay: number) {
  // 定时器
  let timer: number | undefined = undefined;

  // 将debounce处理结果当作函数返回
  return function (this: unknown, ...args: any[]) {
    // 保留调用时的this上下文
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    // 每次事件被触发时，都去清除之前的旧定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 设立新定时器
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
