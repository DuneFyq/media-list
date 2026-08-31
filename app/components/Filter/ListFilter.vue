<script lang="ts" setup>
const { genres } = useGenresStore();
const { formats } = useFormatsStore();
const { ageCategories } = useAgeCategoriesStore();

const { filter } = useFilters();

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const sortData = [
  { id: 0, label: "По дате", value: "date" },
  { id: 1, label: "По рейтингу", value: "rating" },
];
</script>

<template>
  <div class="filter" :class="{ 'filter--closed': !isOpen }">
    <ListFilterHeader :open="isOpen" @toggle-open="toggleOpen" />

    <ListFilterSelection
      class="filter__selection"
      title="Сортировка"
      :items="sortData"
      v-model="filter.sort"
    />
    <ListFilterChips
      class="filter__chips"
      title="Жанры"
      :items="genres"
      v-model="filter.genre"
    />
    <ListFilterSelection
      class="filter__selection"
      title="Возраст"
      :items="ageCategories"
      v-model="filter.age"
    />
    <ListFilterChips
      class="filter__chips"
      title="Форматы"
      :items="formats"
      v-model="filter.format"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter {
  $transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
  background-color: var(--color-secondary-bg);
  padding: 1rem;
  border-radius: var(--border-radius-bg);
  box-shadow: var(--box-shadow-accent);

  @include mq($until: tablet) {
    padding: 0.75rem;
    gap: 0.625rem;
  }

  &--closed {
    max-height: 3.75rem;
    overflow: hidden;
    transition: max-height $transition;

    .filter__selection,
    .filter__chips {
      opacity: 0;
      pointer-events: none;
      transition: opacity $transition;
    }
  }
}
</style>
