// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // GitHub Pages requires static pre-rendering
  ssr: false,

  css: ["modern-normalize/modern-normalize.css", "~/assets/css/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/css/mixins" as *;
            @use "~/assets/css/functions" as *;
            @use "sass-mq" as *;
          `,
        },
      },
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-auth-utils",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});