import User from "~/server/models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.oldPassword || !body.newPassword) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }

    const user = await User.findById(event.context.userId);
    const valid = await bcrypt.compare(body.oldPassword, user.password);
    if (!valid) {
      throw createError({
        statusCode: 401,
        statusMessage: "Old password entered with failure",
      });
    }

    const newHashed = await bcrypt.hash(body.newPassword, 10);
    user.password = newHashed;
    await user.save();

    return {
      status: 200,
      message: "Password has been changed",
    };
  } catch (e) {
    return e;
  }
});
