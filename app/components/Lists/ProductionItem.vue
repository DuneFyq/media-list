<script lang="ts" setup>
import { useFormatsStore } from "@/stores/formats";
import { useGenresStore } from "@/stores/genres";

const props = defineProps<{
  production: TProduction;
}>();

const formatsStore = useFormatsStore();
const genresStore = useGenresStore();

const formatNames = computed(() =>
  formatsStore.getNamesByIds(props.production.formats),
);
const genreNames = computed(() =>
  genresStore.getNamesByIds(props.production.genres),
);
</script>

<template>
  <li class="production">
    <ProductionImage :image="production.image" />

    <div class="production__content">
      <h2 class="production__name">{{ production.name }}</h2>
      <p class="production__description">{{ production.description }}</p>

      <div class="production__tags">
        <TagList
          v-if="formatNames.length"
          :items="formatNames"
          variant="format"
        />
        <TagList v-if="genreNames.length" :items="genreNames" variant="genre" />
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
