<script lang="ts" setup>
definePageMeta({
  layout: "auth",
  type: "Войти",
});

const form = reactive({
  email: "",
  password: "",
});

const serverError = ref("");
const { fetch: fetchUserSession } = useUserSession();

async function handleLogin() {
  serverError.value = "";

  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: form.email,
        password: form.password,
      },
    });

    await fetchUserSession();
    await navigateTo("/");
  } catch (error: any) {
    serverError.value =
      error?.data?.message ||
      error?.message ||
      "Ошибка входа. Проверьте данные.";
  }
}
</script>

<template>
  <div class="login-panel">
    <form @submit.prevent="handleLogin" class="login-panel__form">
      <AuthFormField
        v-model="form.email"
        id="email"
        type="email"
        placeholder="Введите почту"
        required
      >
        Почта
      </AuthFormField>

      <AuthFormField
        v-model="form.password"
        id="password"
        type="password"
        placeholder="Введите пароль"
        required
      >
        Пароль
      </AuthFormField>

      <p v-if="serverError" class="login-panel__error-text">
        {{ serverError }}
      </p>

      <AuthSubmitButton />
    </form>

    <p class="login-panel__hint">
      У вас нет аккаунта?
      <NuxtLink to="/auth/register" class="login-panel__link">Sign Up</NuxtLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    width: 100%;
  }

  &__error-text {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  &__hint {
    @include fluid-text(20, 15);

    text-align: center;
    margin: 0;
  }

  &__link {
    color: var(--color-link);
  }
}
</style>
