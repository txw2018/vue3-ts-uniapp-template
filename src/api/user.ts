import { request } from "@/utils/request";
// import { request1 } from "@/utils/request1";
import { PhoneLoginType } from "@/types/request";
/**
 *@description 获取验证码
 * @param data
 * @returns
 */
export function postVerificationCode(mobile: string) {
  return request.post<any>("/api/user/public/sms", {
    mobile,
    source: 2,
  });
}
/**
 *@description 验证码登录
 * @param data
 * @returns
 */
export function postPhoneLogin(data: PhoneLoginType) {
  return request.post<any>("/api/authorizations", data);
}

/**
 *@description 验证码登录
 * @param data
 * @returns
 */
export function getUser() {
  return request(`/api/user?requirePermissions=1`);
}
