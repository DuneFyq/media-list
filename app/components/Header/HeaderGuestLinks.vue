<script setup>
const links = [
  {
    to: "/auth/login",
    text: "Log In",
  },
  {
    to: "/auth/register",
    text: "Sign Up",
    primary: true,
  },
];
</script>

<template>
  <div class="auth-links">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      class="auth-links__link"
      :class="{
        'auth-links__link--primary': link.primary,
      }"
      :to="link.to"
    >
      {{ link.text }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.auth-links {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;

  @include mq($until: mobile) {
    flex-direction: column;
    width: 100%;
  }

  &__link {
    @include fluid-text(18, 14);

    position: relative;
    display: block;
    padding: 0.625rem;
    color: var(--color-base-font);
    text-align: center;
    text-decoration: none;
    border: var(--border-button);
    border-radius: var(--border-radius-btn);
    flex: 0 0 auto;

    @include mq($until: mobile) {
      width: 100%;
    }

    &--primary {
      color: var(--color-secondary-bg);
      background-color: var(--color-accent);
      border: none;
    }
  }
}
</style>
