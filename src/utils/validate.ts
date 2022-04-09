import { type Numeric } from "./basic";
// 是否是空对象
export const isEmptyObject = (val: unknown): val is object =>
  isPlainObject(val) && Object.keys(val).length === 0;

// 是否已经定义
export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null;

// 是否是对象
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";

const _toString = Object.prototype.toString;

// 是否是普通对象
export function isPlainObject(val: unknown): val is Record<any, any> {
  return _toString.call(val) === "[object Object]";
}

//是数值
export const isNumeric = (val: Numeric): val is string =>
  typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
