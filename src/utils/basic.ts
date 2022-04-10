import type { Ref } from "vue";
export type Numeric = number | string;

export type AnyFunc = (...args: any[]) => any;

export type MaybeRef<T> = T | Ref<T>;
