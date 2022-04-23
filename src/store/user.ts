import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      reaname: "txw",
    };
  },
  getters: {
    getReaname: (state) => state.reaname,
  },
  actions: {
    changeReaname() {
      this.reaname += this.reaname;
    },
  },
});
