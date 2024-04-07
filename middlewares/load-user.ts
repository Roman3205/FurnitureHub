export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const { status } = useAuth();

  if (!userStore.user && status.value === "authenticated") {
    await userStore.loadUser();
  }
  return;
});
