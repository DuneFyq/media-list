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
    <NuxtLink to="/production/add-production" class="profile-panel__add-btn">
      <Icon class="profile-panel__add-icon" name="feather:plus" />
    </NuxtLink>

    <HeaderProfile
      class="profile-panel__header"
      :nickname="user.nickname"
      :userID="user.id"
    />

    <button
      class="profile-panel__logout-btn"
      type="button"
      @click="$emit('logout')"
    >
      Выйти
    </button>
  </div>
</template>

<style lang="scss" scoped>
.profile-panel {
  display: flex;
  align-items: center;
  gap: 0.4375rem;

  &__add-btn {
    @include square(40px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-dark);
    transition: color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: var(--color-accent);
    }
  }

  &__add-icon {
    width: 100%;
    height: 100%;
  }

  &__logout-btn {
    cursor: pointer;
    text-align: center;
    border: none;
    border-radius: var(--border-radius-btn);
    background-color: var(--color-accent);
    color: var(--color-base-font);
    padding: 0.3125rem;
  }
}
</style>
