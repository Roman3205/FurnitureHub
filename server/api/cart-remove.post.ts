import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.id || !body.price) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }
    const user = await User.findOne({ _id: event.context.userId }).populate({
      path: "cartId",
      populate: "products",
    });

    const cart = user?.cartId;

    let item = cart.products.find((prod) => {
      return String(prod._id) === body.id;
    });

    let index = cart.products.indexOf(item);

    cart.products.splice(index, 1);
    cart.totalPrice -= body.price;

    await cart.save();
    return {
      status: 200,
      message: "Product has been removed from cart",
    };
  } catch (e) {
    console.log(e);

    return e;
  }
});
