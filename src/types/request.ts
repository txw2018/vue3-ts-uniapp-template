/**
 * @description 接口请求统一
 */
export type Result<T> = {
  code: number;
  data: T;
};

export type PhoneLoginType = {
  client_id: number;
  client_secret: string;
  grant_type: string;
  source: number;
  username: string;
  password: string;
  captcha_id: string;
  captcha_code: string;
  type: number;
};
