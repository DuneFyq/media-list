<script lang="ts" setup>
defineProps<{ image: string }>();
</script>

<template>
  <div class="production__image-wrapper">
    <NuxtImg
      class="production__image"
      :src="image"
      width="250"
      height="250"
      format="webp"
      loading="lazy"
      fit="cover"
      placeholder
    />
  </div>
</template>

<style lang="scss" scoped>
.production {
  &__image-wrapper {
    width: 100%;
    aspect-ratio: 250 / 250;
    overflow: hidden;
    border-radius: 0.375rem;
    background: var(--color-secondary-bg);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease;

    .production:hover & {
      transform: scale(1.05);
    }
  }
}
</style>
