import { request } from '@/utils/request'
import { Result } from '@/types'

export function getUserInfo(id: number) {
  return request.get<Result<any>>('api/user', { params: { id } })
}
