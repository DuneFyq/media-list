<script lang="ts" setup>
const productions = await $fetch<Production[]>("/api/productions", {
  method: "GET",
});
</script>

<template>
  <div class="list-page">
    <div class="container list-page__container">
      <h1 class="list-page__title">Произведения</h1>

      <ListFilter />

      <ProductionsGrid :productions="productions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-page {
  min-height: 100svh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);

  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
  }

  &__title {
    @include fluid-text(40, 20);

    margin: 0;
  }
}
</style>
