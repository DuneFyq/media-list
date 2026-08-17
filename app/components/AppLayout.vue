<template>
  <div class="app-layout">
    <AppSidebar
      class="app-layout__sidebar"
      aria-label="Боковая панель навигации"
    />

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
  display: flex;

  @include mq($until: tablet) {
    flex-direction: column;
  }

  &__sidebar {
    flex-shrink: 0;
    flex-basis: 5rem;
    padding: 1rem;

    @include mq($from: tablet) {
      min-width: 15.625rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1;
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
