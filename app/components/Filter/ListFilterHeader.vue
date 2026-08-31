<script lang="ts" setup>
const { isDefault, resetFilters } = useFilters();

defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  toggleOpen: [];
}>();
</script>

<template>
  <header class="filter__header">
    <div class="filter__header-group">
      <h2 class="filter__title">
        <Icon class="filter__title-icon" name="fe:filter" />
        Фильтры
      </h2>
      <button class="filter__toggle-button" @click="emit('toggleOpen')">
        <Icon
          class="filter__toggle-icon"
          :name="open ? 'fe:drop-up' : 'fe:drop-down'"
        />
      </button>
    </div>

    <button
      class="filter__reset"
      type="button"
      :disabled="isDefault"
      @click="resetFilters"
    >
      Сбросить
    </button>
  </header>
</template>

<style lang="scss" scoped>
.filter {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-gray);

    @include mq($until: tablet) {
      align-items: flex-start;
    }
  }

  &__header-group {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    min-width: 0;
    flex: 1 1 auto;

    @include mq($until: tablet) {
      flex: 1 1 100%;
    }
  }

  &__title {
    @include fluid-text(18, 12);

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--color-base-font);
  }

  &__title-icon {
    @include square(1.125rem);

    color: var(--color-accent);
    flex-shrink: 0;
  }

  &__toggle-button {
    @include square(1.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  &__toggle-icon {
    @include square(100%);

    color: var(--color-accent);
  }

  &__reset {
    margin-left: auto;
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-accent);
    background: none;
    border: 1px solid transparent;
    border-radius: var(--border-radius-btn);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover:not(:disabled) {
      background-color: var(--color-accent-light);
      color: var(--color-light);
    }

    &:disabled {
      color: var(--color-gray);
      cursor: default;
    }

    @include mq($until: tablet) {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }
  }
}
</style>
