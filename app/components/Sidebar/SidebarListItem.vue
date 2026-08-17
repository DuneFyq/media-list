<script lang="ts" setup>
defineProps<{ item: { to: string; label: string } }>();
</script>

<template>
  <li :key="item.to" class="list-item">
    <NuxtLink
      :to="item.to"
      class="list-item__link"
      active-class="list-item__link--active"
    >
      {{ item.label }}
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
  &__link {
    @include fluid-text(18, 14);

    position: relative;
    display: block;
    padding: 0.625rem;
    color: var(--color-base-font);
    text-align: center;
    text-decoration: none;
    border: var(--border-button);
    border-radius: var(--border-radius-btn);
    overflow: hidden;

    &::before {
      content: "";
      @include abs-x;
      bottom: 0;
      width: 0;
      height: 3px;
      background-color: var(--color-accent);
      border-radius: 2px;
      transition: width 0.3s ease;
      z-index: 1;
    }

    &:hover::before {
      width: 80%;
    }

    &--active {
      color: var(--color-secondary-bg);
      background-color: var(--color-accent);
      border: none;

      &::before {
        display: none;
      }
    }
  }
}
</style>
