import type { MaybeRef, RemovableRef } from "@/utils/basic";
import { ref, watch } from "vue";
export interface Serializer {
  getAll(): void;
  clear(): void;
}

export type ReturnType<T> = Serializer & {
  data: RemovableRef<T>;
};
export default function useStorageSync(): ReturnType<undefined>;
export default function useStorageSync<T>(key: string): ReturnType<T>;
export default function useStorageSync(
  key: string,
  initialValue: MaybeRef<string>
): ReturnType<string>;
export default function useStorageSync(
  key: string,
  initialValue: MaybeRef<number>
): ReturnType<number>;
export default function useStorageSync(
  key: string,
  initialValue: MaybeRef<boolean>
): ReturnType<boolean>;
export default function useStorageSync<T>(
  key: string,
  initialValue: MaybeRef<T>
): ReturnType<T>;
export default function useStorageSync<T = unknown>(
  key: string,
  initialValue: MaybeRef<null>
): ReturnType<T>;
/**
 * use
 * set:     useStorageSync('token' ,12334 )
 * get:     useStorageSync('token')
 * remove:  useStorageSync('token',null)
 * @param key
 * @param initialValue
 * @returns ReturnType<T>
 */
export default function useStorageSync<
  T extends string | number | boolean | object | null
>(key?: string, initialValue?: MaybeRef<T>): ReturnType<T> {
  const data = ref(initialValue) as RemovableRef<T>;
  const len = arguments.length;

  watch(data, () => write(data.value), {
    deep: true,
    immediate: true,
  });
  function write(v: unknown) {
    if (key) {
      if (v == null) {
        uni.removeStorageSync(key);
      }
      if (len === 1) {
        data.value = uni.getStorageSync(key);
      } else if (len === 2) {
        uni.setStorageSync(key, v);
      }
    }
  }

  function getAll() {
    return uni.getStorageInfoSync();
  }

  function clear() {
    uni.clearStorageSync();
  }
  return {
    data,
    getAll,
    clear,
  };
}
