<script lang="ts" setup>
const { isOpen } = useSidebar();
</script>

<template>
  <aside
    class="sidebar"
    :class="{ 'sidebar--closed': !isOpen }"
    aria-label="Основная навигация"
    :aria-hidden="!isOpen"
  >
    <nav class="sidebar__nav">
      <AuthState #default="{ loggedIn, user }">
        <UserProfile
          v-if="loggedIn"
          class="sidebar__profile"
          :nickname="user.nickname"
          variant="sidebar"
          :show-link="false"
        />
      </AuthState>

      <SidebarList />
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  $transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  padding: 1rem;
  background-color: var(--color-secondary-bg);
  overflow: hidden;
  box-sizing: border-box;

  transition:
    padding $transition,
    opacity $transition,
    transform $transition;

  &--closed {
    padding: 0;
    opacity: 0;
    transform: translateX(-0.5rem);
  }

  &__profile {
    @include mq($until: tablet) {
      display: none;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>