import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();
  const loadUser = async () => {
    try {
      const data = await $fetch("/api/user", {
        method: "GET",
        headers: useRequestHeaders(["cookie"]),
      });
      user.value = data._doc;
    } catch (e) {
      return console.log(e);
    }
  };
  return {
    user,
    loadUser,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
