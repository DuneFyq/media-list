<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
defineProps<{ id: string; error?: string }>();

const model = defineModel<string>();
</script>

<template>
  <div class="form-field">
    <label v-if="$slots.default" :for="id" class="form-field__label">
      <slot />
    </label>

    <input v-bind="$attrs" :id="id" v-model="model" class="form-field__input" />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__label {
    @include fluid-text(20, 14);
  }

  &__input {
    @include fluid-text(16, 14);

    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: var(--border-input);
    border-radius: var(--border-radius-input);
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
  }
}
</style>
