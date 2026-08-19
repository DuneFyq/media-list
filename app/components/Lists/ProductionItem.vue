<script lang="ts" setup>
defineProps<{
  production: Production;
}>();
</script>

<template>
  <li class="production">
    <ProductionImage :image="production.image" />

    <div class="production__content">
      <h2 class="production__name">{{ production.name }}</h2>
      <p class="production__description">{{ production.description }}</p>

      <div class="production__tags">
        <TagList
          v-if="production.formats?.length"
          :items="production.formats"
          variant="format"
        />
        <TagList
          v-if="production.genres?.length"
          :items="production.genres"
          variant="genre"
        />
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.production {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
  }

  &__name,
  &__description {
    margin: 0;
    line-height: 1.35;
  }

  &__name {
    @include fluid-text(15, 13);
    font-weight: 600;
  }

  &__description {
    @include fluid-text(13, 11);
    color: var(--color-text-secondary);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 0.125rem;
  }
}
</style>
