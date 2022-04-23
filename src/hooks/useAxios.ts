import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  CancelTokenSource,
} from "axios";
import { ref, watch, shallowRef } from "vue";
import { request } from "../utils/request";

export default function useAxios<T>(axiosParams: AxiosRequestConfig) {
  const response = shallowRef<AxiosResponse<T>>();
  const data = shallowRef<T>();
  const error = ref<AxiosError | null>(null);
  const isLoading = ref(false);
  const isFinished = ref(false);
  const isAborted = ref(false);

  watch(isLoading, (newVal) => {
    if (newVal) {
      uni.showLoading({
        title: "加载中",
      });
    } else {
      uni.hideLoading();
    }
  });

  const loading = (loading: boolean) => {
    isLoading.value = loading;
    isFinished.value = !loading;
  };

  const cancelToken: CancelTokenSource = axios.CancelToken.source();
  const abort = (message?: string) => {
    if (isFinished.value || !isLoading.value) return;

    cancelToken.cancel(message);
    isAborted.value = true;
    isLoading.value = false;
    isFinished.value = false;
  };

  const execute = async (param: AxiosRequestConfig) => {
    try {
      loading(true);
      const result = await request.request(param);
      response.value = result;
      data.value = result.data;
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      loading(false);
    }
  };
  execute(axiosParams);

  return {
    response,
    data,
    error,
    cancel: abort,
    finished: isFinished,
    loading: isLoading,
    Aborted: isAborted,
  };
}
