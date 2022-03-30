/**
 * @description 接口请求统一
 */
export interface Result<T> {
  code: number;
  data: T;
}
