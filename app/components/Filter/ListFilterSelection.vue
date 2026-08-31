<script lang="ts" setup>
const props = defineProps<{
  modelValue: string | number;
  title: string;
  items: {
    id: number | string;
    label: string;
    value?: string;
  }[];
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

const selectedValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <section class="filter__section">
    <label class="filter__label" for="filter-sort">{{ title }}</label>
    <div class="filter__select-wrapper">
      <select v-model="selectedValue" class="filter__select" id="filter-sort">
        <option
          v-for="item in items"
          :key="item.id"
          :value="item.value ?? item.id"
        >
          {{ item.label }}
        </option>
      </select>
      <Icon class="filter__select-arrow" name="fe:arrow-down" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.filter {
  $transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &__label {
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-muted-font);
    display: block;
    margin-bottom: 0.375rem;
  }

  &__select-wrapper {
    position: relative;
  }

  &__select {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-family: inherit;
    color: var(--color-base-font);
    background-color: var(--color-light);
    border: var(--border-input);
    border-radius: var(--border-radius-input);
    appearance: none;
    cursor: pointer;
    transition:
      border-color $transition,
      box-shadow $transition;

    &:hover {
      border-color: var(--color-accent);
    }

    &:focus-visible {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }
  }

  &__select-arrow {
    position: absolute;
    right: 0.625rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
    color: var(--color-muted-font);
    pointer-events: none;
  }
}
</style>
