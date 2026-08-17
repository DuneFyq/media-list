<script lang="ts" setup>
const productions: Production[] = [
  {
    id: 0,
    name: "Призрак в доспехах",
    image: "/images/ghost.jpg",
    ageRating: 18,
    description: "Год 2029. Мир опутан информационными сетями.",
    formats: ["Аниме", "Фильм"],
    genres: [
      "Genre#1",
      "Genre#2",
      "Genre#5",
      "Genre#8",
      "Genre#1",
      "Genre#4",
      "Genre#3",
    ],
  },
  {
    id: 1,
    name: "Обсессия",
    image: "/images/obsession.jpg",
    ageRating: 18,
    description: "Беар — неисправимый романтик.",
    formats: ["Фильм"],
    genres: ["Genre#5", "Genre#8"],
  },
];
</script>

<template>
  <div class="list-page">
    <div class="container list-page__container">
      <h1 class="list-page__title">Список просмотренного</h1>

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
