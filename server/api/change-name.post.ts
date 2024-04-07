import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }

    const user = await User.findById(event.context.userId);

    user.name = body.name;
    await user.save();

    return {
      status: 200,
      message: "Name has been changed",
    };
  } catch (e) {
    console.log(e);

    return e;
  }
});
