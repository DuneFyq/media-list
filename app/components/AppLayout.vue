<script lang="ts" setup>
const { isOpen } = useSidebar();
</script>

<template>
  <div class="app-layout" :class="{ 'app-layout--sidebar-closed': !isOpen }">
    <AppSidebar class="app-layout__sidebar" />

    <div class="app-layout__main">
      <main class="app-layout__content">
        <slot />
      </main>

      <AppFooter class="app-layout__footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  $transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;

  @include mq($until: tablet) {
    flex-direction: column;
  }

  &__sidebar {
    flex: 0 0 15.625rem;
    width: 15.625rem;
    min-width: 15.625rem;

    transition:
      width $transition,
      min-width $transition,
      flex-basis $transition;
  }

  &--sidebar-closed {
    .app-layout__sidebar {
      flex-basis: 0;
      width: 0;
      min-width: 0;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0;
  }

  &__content {
    flex-grow: 1;
    padding: 1rem;
  }

  &__footer {
    padding: 1rem;
  }
}
</style>
