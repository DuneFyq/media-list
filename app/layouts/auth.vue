<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <main class="auth-layout">
    <div class="auth-layout__wrapper">
      <section class="auth-card" aria-labelledby="auth-title">
        <h1 id="auth-title" class="auth-card__title">
          {{ route.meta.type }}
        </h1>

        <div class="auth-card__content">
          <slot />

          <NuxtLink class="auth-card__return-link" to="/">
            Вернуться на главную
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  &__wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
}

.auth-card {
  width: 100%;
  max-width: 31.25rem;
  padding: 2rem;
  background-color: var(--color-secondary-bg);
  border-radius: var(--border-radius-bg);
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.05);
  text-align: left;

  &__title {
    @include fluid-text(30, 25);

    margin: 0 0 1.5rem;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__return-link {
    @include fluid-text(20, 15);
    color: var(--color-base-font);
    text-decoration: none;
    text-align: center;
    flex: 1;
    transition: color 0.4s linear;

    &:hover {
      color: var(--color-link);
    }
  }
}
</style>
