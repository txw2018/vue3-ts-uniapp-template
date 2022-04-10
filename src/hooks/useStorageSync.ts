import type { MaybeRef } from "@/utils/basic";
import { ref } from "vue";
export interface Serializer {
  getAll(): void;
  clear(): void;
}

export type ReturnType<T> = Serializer & {
  data: MaybeRef<T>;
};
export default function useStorageSync(): any | void;
export default function useStorageSync(
  key: string,
  initialValue?: MaybeRef<string>
): ReturnType<string>;
export default function useStorageSync(
  key: string,
  initialValue?: MaybeRef<number>
): ReturnType<number>;
export default function useStorageSync(
  key: string,
  initialValue?: MaybeRef<boolean>
): ReturnType<boolean>;
export default function useStorageSync<T>(
  key: string,
  initialValue?: MaybeRef<T>
): ReturnType<T>;
export default function useStorageSync<T = unknown>(
  key: string,
  initialValue?: MaybeRef<null>
): ReturnType<T>;
export default function useStorageSync<
  T extends string | number | boolean | object | null
>(key?: string, initialValue?: MaybeRef<T>): ReturnType<T> {
  const data = ref(initialValue);

  if (key) {
    write(data);
  }
  function write(v: unknown) {
    if (!v) {
      uni.removeStorageSync(key!);
    } else {
      uni.setStorageSync(key!, v);
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
