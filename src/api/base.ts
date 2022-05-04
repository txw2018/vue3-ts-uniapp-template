import { request } from "@/utils/request";

export function get<T = any, P = any>(url: string, params?: P) {
  return request
    .get<T>(url, {
      params,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export function post<T = any, P = any>(url: string, data?: P) {
  return request
    .post<T>(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
