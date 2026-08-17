<template>
  <div class="content">
    <h1 class="content__title">Главная страница</h1>
    <p class="content__description">Пока пусто</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  text-align: center;

  &__title {
    margin: 0;
  }

  &__description {
    flex: 1;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
