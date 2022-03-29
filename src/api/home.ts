import http from '../utils/request'
import { Result } from './type'

export function getUserInfo(id: number) {
  return http.get<Result<any>>('api/user', { params: { id } })
}
