<script lang="ts" setup>
const posts = [
  {
    id: 0,
    title: "Заголовок поста #1",
    description: "Это пост говорит о .... произведение #156",
    creationDate: "2026-08-10",
  },
  {
    id: 1,
    title: "Заголовок поста #2",
    description: "Это пост говорит о .... произведение #2013",
    creationDate: "2026-08-16",
  },
  {
    id: 3,
    title: "Заголовок поста #3",
    description: "Это пост говорит о .... произведение #935",
    creationDate: "2026-08-2",
  },
  {
    id: 4,
    title: "Заголовок поста #4",
    description: "Это пост говорит о .... произведение #12",
    creationDate: "2026-08-4",
  },
];
</script>

<template>
  <div class="list-page">
    <div class="container list-page__container">
      <h1 class="list-page__title">Моё мнение</h1>

      <div class="list-page__content">
        <article class="post" v-for="post in posts">
          <h2 class="post__title">{{ post.title }}</h2>
          <p class="post__description">
            {{ post.description }}
          </p>
          <NuxtTime
            class="post__date"
            year="numeric"
            month="long"
            day="numeric"
            :datetime="post.creationDate"
          />
        </article>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-page {
  min-height: 100svh;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);

  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  &__title,
  &__content {
    margin: 0;
  }


  &__title {
    @include fluid-text(40, 20);
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0;

    @include mq($until: 360px) {
      grid-template-columns: 1fr;
    }

    @include mq($from: tablet) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.post {
  padding: 1rem;
  background-color: var(--color-primary-bg);

  &__description,
  &__title {
    margin: 0;
  }

  &__title {
    @include fluid-text(30, 15);
  }
}
</style>
