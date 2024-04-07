import { useUserStore } from "#imports";
export const checkInCart = (id: string) => {
  const userStore = useUserStore();
  const cart = userStore.user.cartId.products.some(
    (prod) => prod.product._id == id
  );

  return cart;
};
