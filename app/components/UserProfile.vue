<script lang="ts" setup>
defineProps<{
  nickname: string;
  userId?: number;
  avatar?: string;
  variant?: "header" | "sidebar";
  showLink?: boolean;
}>();
</script>

<template>
  <div class="user-profile" :class="`user-profile--${variant ?? 'sidebar'}`">
    <img
      class="user-profile__avatar"
      :src="avatar || ''"
      :alt="`${nickname} avatar`"
    />

    <div class="user-profile__info">
      <span class="user-profile__nickname">{{ nickname }}</span>

      <NuxtLink
        v-if="showLink && userId"
        :to="`/user/${userId}/profile`"
        class="user-profile__link"
      >
        Профиль
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &--header {
    align-items: center;
  }

  &--sidebar {
    align-items: center;
  }

  &__avatar {
    @include square(40px);
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--color-light);
    border: 1px solid var(--color-gray);
    flex-shrink: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  &__nickname {
    color: var(--color-base-font);
    font-weight: 600;
    line-height: 1.2;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--border-radius-btn);
    background-color: var(--color-accent);
    color: var(--color-base-font);
    padding: 0.3125rem;
    text-decoration: none;
    margin-top: 0.125rem;
    line-height: 1.2;
  }
}
</style>
