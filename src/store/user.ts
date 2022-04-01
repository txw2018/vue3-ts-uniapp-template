import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      value: 1,
    };
  },
  getters: {
    getValue: (state) => state.value,
  },
  actions: {
    changeValue() {
      this.value++;
    },
  },
});
