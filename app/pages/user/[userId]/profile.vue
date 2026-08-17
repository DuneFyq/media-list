<script lang="ts" setup>
const userId = useRoute().params.userId as string;
</script>

<template>
  <div>
    <p>Профиль пользователя: {{ userId }}</p>
  </div>
</template>
