import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 5 });

export const request = createAxiosInstance();

function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
  });
  instance.interceptors.request.use(handleRequest, handleRequestError);
  instance.interceptors.response.use(handleResponse, handleResponseError);
  return instance;
}

function handleRequest(config: AxiosRequestConfig) {
  const token = uni.getStorageSync("yq_token");
  config.headers!.Authorization = "Bearer " + token;
  return config;
}

function handleRequestError(error: AxiosError) {
  throw error;
}

function handleResponse(response: AxiosResponse) {
  return response;
}

function handleResponseError(error: AxiosError) {
  switch (error.response?.status) {
    case 400:
      break;
    case 401:
      break;
    case 405:
      handleResponseError405(error);
      break;
  }
}
function handleResponseError405(error: AxiosError) {
  console.log(error.response);
}
