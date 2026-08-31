<script lang="ts" setup>
const { data: productions, error } =
  await useFetch<TProduction[]>("/api/productions");
if (error.value) {
  console.error("Произошла ошибка при загрузке:", error.value);
}

const filteredProductions = computed(() => {
  const { filter } = useFilters();

  return productions.value?.filter((production) => {
    const matchesGenre =
      !filter.value.genre.length ||
      production.genres.some((genre: number) =>
        filter.value.genre.some((selectedGenre) => selectedGenre === genre),
      );
    const matchesFormat =
      !filter.value.format.length ||
      production.formats.some((format: number) =>
        filter.value.format.some((selectedFormat) => selectedFormat === format),
      );

    return matchesGenre && matchesFormat;
  });
});
</script>

<template>
  <div class="list-page">
    <div class="container list-page__container">
      <h1 class="list-page__title">Произведения</h1>

      <ListFilter />

      <ProductionsGrid
        v-if="filteredProductions"
        :productions="filteredProductions"
      />
      <div v-else>Загрузка...</div>
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
  }

  &__title {
    @include fluid-text(40, 20);

    margin: 0;
  }
}
</style>
