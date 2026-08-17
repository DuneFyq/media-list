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
      <p class="production__age-rating">{{ production.ageRating }}</p>

      <div class="production__tags">
        <ul class="production__formats">
          <li
            v-for="format in production.formats"
            :key="format"
            class="production__format"
          >
            {{ format }}
          </li>
        </ul>

        <ul class="production__genres">
          <li
            v-for="genre in production.genres"
            :key="genre"
            class="production__genre"
          >
            {{ genre }}
          </li>
        </ul>
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

  &__formats,
  &__genres {
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
