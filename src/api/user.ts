import { post } from "./base";
// import { request1 } from "@/utils/request1";
import { PhoneLoginType } from "@/types/request";

/**
 *@description 验证码登录
 * @param data
 * @returns
 */
export function postPhoneLogin(data: PhoneLoginType) {
  return post<any>("/api/authorizations", data);
}
