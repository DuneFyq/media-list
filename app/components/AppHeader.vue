<template>
  <header class="header">
    <HeaderToggleButton class="header__toggle" />

    <NuxtLink class="header__title" to="/" aria-label="На главную">
      <span class="visually-hidden">My media list</span>
      <Icon class="header__title-icon" name="fe:document" />
    </NuxtLink>

    <div class="header__auth">
      <AuthState v-slot="{ loggedIn, user, clear }">
        <HeaderAuthorized v-if="loggedIn" :user="user" @logout="clear" />
        <HeaderGuestLinks v-else />
      </AuthState>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem;
  background-color: var(--color-secondary-bg);

  @include mq($until: tablet) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  &__toggle {
    grid-column: 1;
    justify-self: start;
    flex-shrink: 0;
    z-index: 1;

    @include mq($until: tablet) {
      justify-self: center;
    }
  }

  &__title {
    @include fluid-text(40, 20);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-accent);
    text-decoration: none;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 0;

    @include mq($until: tablet) {
      position: static;
      transform: none;
      z-index: auto;
    }
  }

  &__title-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-accent);
  }

  &__auth {
    grid-column: 3;
    display: flex;
    align-items: center;
    justify-self: end;
    justify-content: flex-end;
    min-width: 0;
    z-index: 1;

    @include mq($until: tablet) {
      width: 100%;
      justify-self: stretch;
      justify-content: center;
    }
  }
}
</style>
