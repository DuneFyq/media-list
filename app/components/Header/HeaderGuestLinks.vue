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
  <NuxtLink
    v-for="link in links"
    :key="link.to"
    class="auth-link"
    :class="{
      'auth-link--primary': link.primary,
    }"
    :to="link.to"
  >
    {{ link.text }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.auth-link {
  @include fluid-text(18, 14);

  position: relative;
  display: block;
  padding: 0.625rem;
  color: var(--color-base-font);
  text-align: center;
  text-decoration: none;
  border: var(--border-button);
  border-radius: var(--border-radius-btn);

  @include mq($until: mobile) {
    width: 100%;
  }

  &--primary {
    color: var(--color-secondary-bg);
    background-color: var(--color-accent);
    border: none;
  }
}
</style>
