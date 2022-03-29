import { request } from '@/utils/request'
import { Result } from './type'

export function getUserInfo(id: number) {
  return request.get<Result<unknown>>('api/user', { params: { id } })
}
