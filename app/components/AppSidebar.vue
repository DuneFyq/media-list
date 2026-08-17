<script lang="ts" setup>
const { isOpen } = useSidebar();
</script>

<template>
  <aside v-show="isOpen" class="sidebar" aria-label="Основная навигация">
    <nav class="sidebar__nav">
      <AuthState #default="{ loggedIn, user }">
        <SidebarProfile
          class="sidebar__profile"
          v-if="loggedIn"
          :nickname="user.nickname"
        />
      </AuthState>

      <SidebarList />
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--color-secondary-bg);

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
