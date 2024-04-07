import Cart from "~/server/models/Cart";
import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.price || !body.id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }
    const user = await User.findOne({ _id: event.context.userId }).populate({
      path: "cartId",
    });
    const cart = user?.cartId;
    if (cart.products.find((prod) => prod.product == body.id)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Product is already in your cart",
      });
    }
    cart.products.push({ product: body.id, price: body.price });
    cart.totalPrice += body.price;

    await cart.save();

    return {
      status: 200,
      message: "Product has been added to cart",
    };
  } catch (e) {
    console.log(e);

    return e;
  }
});
