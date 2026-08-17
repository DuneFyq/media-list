<template>
  <div class="layout">
    <AppHeader class="layout__header" />

    <AppLayout class="layout__body">
      <slot />
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__header {
    min-height: 2.5rem;
  }

  &__body {
    flex: 1;
  }
}
</style>
