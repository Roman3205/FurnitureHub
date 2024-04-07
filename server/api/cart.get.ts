import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const user = await User.findById(event.context.userId).populate({
      path: "cartId",
      populate: "products.product",
    });

    return {
      products: user?.cartId.products,
      totalPrice: user?.cartId.totalPrice,
    };
  } catch (e) {
    return e;
  }
});
