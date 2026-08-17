<script lang="ts" setup>
defineProps<{ nickname: string; userID: number }>();
</script>

<template>
  <div class="profile">
    <img src="" alt="Картинка профиля" class="profile__logo" />
    <div class="profile__info">
      <span class="profile__nickname">{{ nickname }}</span>
      <NuxtLink :to="`/user/${userID}/profile`" class="profile__link">Профиль</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    @include square(40px);
    border-radius: 50%;
    object-fit: cover;
  }

  &__link {
    text-align: center;
    border-radius: var(--border-radius-btn);
    background-color: var(--color-accent);
    color: var(--color-base-font);
    padding: 0.3125rem;
    text-decoration: none;
  }
}
</style>
