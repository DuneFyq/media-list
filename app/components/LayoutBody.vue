<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="layout-body">
    <AppSidebar
      v-if="route.meta.sidebar"
      class="layout-body__sidebar"
      aria-label="Боковая панель навигации"
    />

    <div class="layout-body__main">
      <main class="layout-body__content">
        <h1 class="layout-body__title">{{ route.meta.title }}</h1>

        <slot />
      </main>

      <AppFooter class="layout-body__footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-body {
  display: flex;

  @include mq($until: tablet) {
    flex-direction: column;
  }

  &__sidebar {
    min-width: 18.75rem;
    flex-shrink: 0;
    flex-basis: 5rem;
    padding: px2em(1rem);
  }

  &__main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__content {
    flex-grow: 1;
    padding: px2em(1rem);
  }

  &__title {
    @include fluid-text(40, 30);

    text-align: center;
  }
}
</style>
