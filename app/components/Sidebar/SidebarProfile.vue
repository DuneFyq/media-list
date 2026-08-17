<script lang="ts" setup>
defineProps<{ nickname: string }>();
</script>

<template>
  <div class="profile">
    <img src="" alt="Картинка профиля" class="profile__logo" />
    <div class="profile__info">
      <span class="profile__nickname">{{ nickname }}</span>
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
}
</style>
