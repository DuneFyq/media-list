<script lang="ts" setup>
const { isOpen, toggle } = useSidebar();
</script>

<template>
  <div class="toggle-btn-wrapper">
    <button @click="toggle" class="toggle-btn" :aria-expanded="isOpen">
      <Icon
        class="toggle-btn__icon"
        :name="isOpen ? 'feather:x' : 'feather:menu'"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toggle-btn {
  color: var(--color-dark);
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;

  &__icon {
    @include square(2.5rem);
  }
}
</style>
