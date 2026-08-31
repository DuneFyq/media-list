<script lang="ts" setup>
import type { TChipItem } from '~/types/chip.types';

defineProps<{
  item: TChipItem;
  isActive: boolean;
}>();

const emit = defineEmits<{
  toggle: [itemId: number | string];
}>();
</script>

<template>
  <label class="filter__chip" :class="{ 'filter__chip--active': isActive }">
    <input
      class="filter__checkbox"
      type="checkbox"
      :value="item.id"
      :checked="isActive"
      @change="emit('toggle', item.id)"
    />
    <span class="filter__chip-text">{{ item.name }}</span>
  </label>
</template>

<style lang="scss" scoped>
.filter {
  $transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &__chip {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-base-font);
    background-color: var(--color-light);
    border: var(--border-input);
    border-radius: var(--border-radius-input);
    cursor: pointer;
    user-select: none;
    transition:
      border-color $transition,
      box-shadow $transition,
      background-color $transition,
      color $transition;

    &:hover {
      border-color: var(--color-accent);
    }

    &:has(.filter__checkbox:focus-visible) {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    &--active {
      color: var(--color-light);
      background-color: var(--color-accent);
      border-color: var(--color-accent);

      &:hover {
        background-color: var(--color-link);
        border-color: var(--color-link);
      }
    }
  }

  &__checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  &__chip-text {
    line-height: 1.2;
    pointer-events: none;
  }
}
</style>
