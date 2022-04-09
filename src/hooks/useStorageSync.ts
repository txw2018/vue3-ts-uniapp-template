export default function useStorageSync(key, data) {
  function write(v: unknown) {
    if (!v) {
      uni.removeStorageSync(key);
    } else {
      uni.setStorageSync(key, v);
    }
  }
  write(data);
}
