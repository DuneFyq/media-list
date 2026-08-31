<script lang="ts" setup>
import type { TChipItem } from "~/types/chip.types";

const props = defineProps<{
  title: string;
  items: TChipItem[];
  modelValue: (number | string)[];
}>();

const emit = defineEmits<{
  "update:modelValue": [value: (number | string)[]];
}>();

const handleChipToggle = (itemId: number | string) => {
  emit(
    "update:modelValue",
    props.modelValue.includes(itemId)
      ? props.modelValue.filter((id) => id !== itemId)
      : [...props.modelValue, itemId],
  );
};

const safeTitleId = (title: string) =>
  `group-title-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
</script>

<template>
  <section class="filter__section">
    <span class="filter__label" :id="safeTitleId(title)">{{ title }}</span>
    <div
      class="filter__chips"
      role="group"
      :aria-labelledby="safeTitleId(title)"
    >
      <ListFilterChip
        v-for="item in items"
        :key="item.id"
        :item="item"
        :is-active="modelValue.includes(item.id)"
        @toggle="handleChipToggle"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.filter {
  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__label {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-muted-font);
    display: block;
    width: 100%;
    margin-bottom: 0.375rem;
    text-align: center;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    justify-content: center;
    width: 100%;
  }
}
</style>
