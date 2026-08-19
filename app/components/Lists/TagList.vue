<script lang="ts" setup>
defineProps<{
  items: string[];
  variant: "format" | "genre";
}>();
</script>

<template>
  <ul v-if="items.length" class="production__tag-list">
    <li v-for="item in items" :key="item" :class="`production__${variant}`">
      {{ item }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.production {
  &__tag-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 0.125rem;
  }
  &__format,
  &__genre {
    --tagBG: green;

    @include fluid-text(12, 10);
    padding: 0.25rem;
    border-radius: var(--border-radius-bg);
    background-color: var(--tagBG);
  }

  &__format {
    --tagBG: var(--color-format);

    &:nth-child(n + 3) {
      display: none;
    }
  }

  &__genre {
    --tagBG: var(--color-genre);

    &:nth-child(n + 6) {
      display: none;
    }
  }
}
</style>
