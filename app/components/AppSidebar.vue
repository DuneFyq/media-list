<script lang="ts" setup>
const { isOpen } = useSidebar();

const menuItems = [
  {
    to: "/",
    label: "Главная",
  },
  {
    to: "/watched",
    label: "Список просмотренного",
  },
  {
    to: "/opinions",
    label: "Моё мнение",
  },
  {
    to: "/watchlist",
    label: "Собираюсь посмотреть",
  },
];
</script>

<template>
  <aside v-show="isOpen" class="sidebar" aria-label="Основная навигация">
    <nav class="sidebar__nav">
      <h2 class="sidebar__title">Sidebar</h2>

      <ul class="sidebar__list">
        <li v-for="item in menuItems" class="sidebar__list-item">
          <NuxtLink
            :to="`/category${item.to}`"
            class="sidebar__link"
            active-class="sidebar__link--active"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--color-secondary-bg);

  &__title {
    @include fluid-text(40, 30);

    text-align: center;
  }

  &__list {
    list-style-type: none;
    line-height: 1.6;
    padding: 0;
  }

  &__link {
    @include fluid-text(20, 12);

    display: block;
    border-radius: 0.625rem;
    padding: 0.625rem;
    color: var(--color-base-font);
    text-align: center;
    text-decoration: none;

    &--active {
      @include fluid-text(20, 14);

      color: var(--color-secondary-bg);
      background-color: var(--color-accent);
    }
  }
}
</style>
