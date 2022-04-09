export default function useStorage(key, data, success, fail, complete) {
  uni.setStorage({
    key: key,
    data: data,
    success: success,
    fail: fail,
    complete: complete,
  });
}
