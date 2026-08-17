<template>
  <header class="header">
    <HeaderToggleButton />

    <NuxtLink class="header__title" to="/" aria-label="На главную">
      <span class="visually-hidden">My media list</span>
      <img src="" alt="" />
    </NuxtLink>

    <AuthState v-slot="{ loggedIn, user, clear }">
      <HeaderAuthorized v-if="loggedIn" :user="user" @logout="clear" />
      <HeaderGuestLinks v-else />
    </AuthState>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem;
  background-color: var(--color-secondary-bg);

  @include mq($until: 380px) {
    flex-direction: column;
    gap: 0.875rem;
  }

  > :first-child,
  > :last-child {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  > :first-child {
    justify-content: flex-start;
  }

  > :last-child {
    justify-content: flex-end;
  }

  &__title {
    @include fluid-text(40, 20);
    color: var(--color-accent);
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
  }
}
</style>
