<template>
  <div class="content">
    <h1 class="content__title">Главная страница</h1>
    <p class="content__description">Пока пусто</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  min-height: 100svh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);

  display: flex;
  flex-direction: column;
  height: 100dvh;
  text-align: center;

  &__description,
  &__title {
    margin: 0;
  }

  &__title {
    @include fluid-text(40, 20);
  }

  &__description {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
