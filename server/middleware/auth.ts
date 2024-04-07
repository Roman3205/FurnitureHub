import { getServerSession } from "#auth";
export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event);

    const protectedRoutes = [
      "/api/change-password",
      "/api/change-name",
      "/api/user",
      "/api/subscribe",
      "/api/cart-add",
      "/api/cart",
      "/api/cart-remove",
    ];
    const isProtectedRoute = protectedRoutes.some((route) =>
      getRequestURL(event).pathname.startsWith(route)
    );

    if (!isProtectedRoute) return;

    if (!session) {
      throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
    }

    event.context.userId = session?.user.id;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Issues with authorization",
    });
  }
});
