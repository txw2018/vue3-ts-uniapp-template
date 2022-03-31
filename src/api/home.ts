import { request } from "@/utils/request";

export function getUserInfo(id: number) {
  return request.get<any>("api/user", { params: { id } });
}
