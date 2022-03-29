// 是否是空对象
export const isEmptyObject = (val: any): boolean =>
  Object.keys(val).length === 0

// 是否已经定义
export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

// 是否是对象
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

const _toString = Object.prototype.toString

// 是否是普通对象
export function isPlainObject(obj: unknown): obj is Record<any, any> {
  return _toString.call(obj) === '[object Object]'
}
