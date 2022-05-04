import { get } from "@/api/base";

export function getUserInfo(id: number) {
  return get("api/user", { params: { id } });
}
