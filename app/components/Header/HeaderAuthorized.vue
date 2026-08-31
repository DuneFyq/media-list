<script lang="ts" setup>
defineProps<{
  user: {
    id: number;
    nickname: string;
  };
}>();

defineEmits(["logout"]);
</script>

<template>
  <div class="profile-panel">
    <NuxtLink to="/production/add-production" class="profile-panel__add-button">
      <Icon class="profile-panel__add-icon" name="feather:plus" />
    </NuxtLink>

    <UserProfile
      :nickname="user.nickname"
      :user-id="user.id"
      variant="header"
      :show-link="true"
    />

    <button
      class="profile-panel__logout-button"
      type="button"
      @click="$emit('logout')"
    >
      Выйти
    </button>
  </div>
</template>

<style lang="scss" scoped>
.profile-panel {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.4375rem;
  width: 100%;

  @include mq($until: mobile) {
    flex-wrap: wrap;
    justify-content: center;
  }

  &__add-button {
    @include square(40px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-dark);
    transition: color 0.2s ease;
    flex-shrink: 0;

    &:hover,
    &:focus-visible {
      color: var(--color-accent);
    }
  }

  &__add-icon {
    width: 100%;
    height: 100%;
  }

  &__profile {
    flex-shrink: 0;
  }

  &__logout-button {
    cursor: pointer;
    text-align: center;
    border: none;
    border-radius: var(--border-radius-btn);
    background-color: var(--color-accent);
    color: var(--color-base-font);
    padding: 0.3125rem;
    white-space: nowrap;
  }
}
</style>
