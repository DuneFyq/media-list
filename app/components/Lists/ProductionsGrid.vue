<script lang="ts" setup>
defineProps<{
  productions: Production[];
}>();
</script>

<template>
  <ul class="list-page__productions">
    <ProductionItem
      class="list-page__production-item"
      v-for="production in productions"
      :key="production.id"
      :production="production"
    />
  </ul>
</template>

<style lang="scss" scoped>
.list-page {
  &__productions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin: 0;
    padding: 0;

    @include mq($until: 360px) {
      grid-template-columns: 1fr;
    }

    @include mq($from: tablet, $until: desktop) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mq($from: desktop) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__production-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: var(--border-radius-bg);
    padding: 0.5rem;
    background: var(--color-primary-bg);
    overflow: hidden;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    @include mq($from: desktop) {
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }
    }
  }
}
</style>
