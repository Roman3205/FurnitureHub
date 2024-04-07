import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    let user = await User.findById(event.context.userId).populate({
      path: "cartId",
      populate: "products.product",
    });
    return {
      ...user,
      // ...user?.cartId,
      password: undefined,
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
    });
  }
});
