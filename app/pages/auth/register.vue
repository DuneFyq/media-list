<script lang="ts" setup>
definePageMeta({
  layout: "auth",
  type: "Регистрация",
});

const form = reactive({
  nickname: "",
  email: "",
  password: "",
});

const serverError = ref("");
const { fetch: fetchUserSession } = useUserSession();

async function handleReg() {
  serverError.value = "";

  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        nickname: form.nickname,
        email: form.email,
        password: form.password,
      },
    });

    await fetchUserSession();
    await navigateTo("/");
  } catch (error: unknown) {
    if (typeof error === "string") {
      serverError.value = error ?? "Ошибка входа. Проверьте данные.";
    }
  }
}
</script>

<template>
  <div class="registration-panel">
    <form @submit.prevent="handleReg" class="registration-panel__form">
      <AuthFormField
        v-model="form.nickname"
        id="nickname"
        type="name"
        placeholder="Например, cyber_hero"
        required
      >
        Никнейм
      </AuthFormField>
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

      <AuthSubmitButton />
    </form>

    <p v-if="serverError" class="login-panel__error-text">
      {{ serverError }}
    </p>

    <p class="registration-panel__hint">
      Уже есть аккаунт?
      <NuxtLink to="/auth/login" class="registration-panel__link">
        Log In
      </NuxtLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.registration-panel {
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
}
</style>
