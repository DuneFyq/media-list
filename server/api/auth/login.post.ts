export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email and password are required",
    });
  }

  const nickname = "Alex";

  await setUserSession(event, {
    user: {
      id: 0,
      nickname,
      email,
    },
    loggedInAt: Date.now(),
  });

  return { success: true };
});
