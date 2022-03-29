import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 5 })

export const request = createAxiosInstance()

function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
  })
  instance.interceptors.request.use(handleRequest, handleRequestError)
  instance.interceptors.response.use(handleResponse, handleResponseError)
  return instance
}

function handleRequest(config: AxiosRequestConfig) {
  const token = uni.getStorageSync('token')
  config.headers!.Authorization = 'Bearer ' + token
  return config
}

function handleRequestError(e: AxiosError) {
  throw e
}

function handleResponse(response: AxiosResponse) {
  return response.data
}

function handleResponseError(error: AxiosError) {
  switch (error.response?.status) {
    case 400:
      break
    case 401:
      break
  }
}
