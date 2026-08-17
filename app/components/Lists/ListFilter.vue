<script lang="ts" setup>
const sort = ref("date");
</script>

<template>
  <div class="list-page__filter-panel">
    <!-- Ваши фильтры -->
    <select v-model="sort">
      <option value="date">По дате</option>
      <option value="rating">По рейтингу</option>
    </select>
  </div>
</template>
