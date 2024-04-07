import User from "~/server/models/User";
import Cart from "~/server/models/Cart";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password || !body.name) {
      // setResponseStatus(event, 403);
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const cart = await Cart.create({
      product: [],
      totalPrice: 0,
    });

    await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      isSubscribed: false,
      orders: [],
      cartId: cart._id,
    });
    setResponseStatus(event, 200, "User has been registered");

    return {
      message: "User has been registered",
    };
  } catch (error) {
    console.log(error);
    return error;
  }
});
