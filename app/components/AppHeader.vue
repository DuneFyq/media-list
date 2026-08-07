<script lang="ts" setup>
const { isOpen, toggle } = useSidebar();
</script>

<template>
  <header class="header">
    <button @click="toggle" class="header__toggle">
      {{ isOpen ? "Закрыть" : "Открыть" }}
    </button>

    <h1 class="header__title">My media list</h1>

    <div class="header__profile">
      <img src="" alt="Картинка профиля" class="profile__logo" />
      <span class="profile__nickname">Игрок 1</span>
      <NuxtLink to="/user/profile/0" class="profile__link">Профиль</NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem;

  &__title {
    @include fluid-text(40, 30);
    margin: 0;
    text-align: center;
    flex: 1;
  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.profile {
  &__logo {
    @include square(40px);
    border-radius: 50%;
    object-fit: cover;
  }

  &__nickname {
    margin: 0;
  }
}
</style>