import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }

    const user = await User.findById(event.context.userId);
    if (user?.isSubscribed === true) {
      throw createError({
        statusCode: 409,
        statusMessage: "You already have had your email subscribed",
      });
    }

    if (user?.email !== body.email) {
      throw createError({
        statusCode: 400,
        statusMessage: "You can not subscribe on not yours email",
      });
    }

    user.isSubscribed = true;
    await user?.save();

    return {
      status: 200,
      message: "You have been subscribed on news",
    };
  } catch (e) {
    console.log(e);
    return e;
  }
});
