<template>
  <div class="layout">
    <AppHeader class="layout__header" />

    <LayoutBody class="layout__body">
      <slot />
    </LayoutBody>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    min-height: 2.5rem;
  }

  &__body {
    flex: 1;
  }
}
</style>
