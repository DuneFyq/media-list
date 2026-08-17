export default defineEventHandler(async (event) => {
  const { nickname, email, password } = await readBody(event);

  const emailValidation = validateEmail(email);
  if (!emailValidation.success) {
    throw createError({ status: 400, message: emailValidation.message });
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.success) {
    throw createError({ status: 400, message: passwordValidation.message });
  }

  const hashedPassword = await hashPassword(password);
  const user = null; // await createUser({
  //   nickname,
  //   email,
  //   password: hashedPassword,
  // });

  await setUserSession(event, {
    user: {
      id: 0,
      nickname,
      email,
    }
  });

  return { success: true };
});
