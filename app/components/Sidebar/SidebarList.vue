<script lang="ts" setup>
const menuItems = [
  { to: "/", label: "Главная" },
  { to: "/category/productions", label: "Произведения" },
  { to: "/category/watched", label: "Список просмотренного" },
  { to: "/category/watchlist", label: "Собираюсь посмотреть" },
  { to: "/category/opinions", label: "Моё мнение" },
];
</script>

<template>
  <ul class="list">
    <SidebarListItem v-for="item in menuItems" :key="item.to" :item="item" />
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
  line-height: 1.6;
}
</style>
