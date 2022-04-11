import type { Ref } from "vue";
export type Numeric = number | string;

export type AnyFunc = (...args: any[]) => any;

export type MaybeRef<T> = T | Ref<T>;

export type RemovableRef<T> = Omit<Ref<T>, "value"> & {
  get value(): T;
  set value(value: T | null | undefined);
};
