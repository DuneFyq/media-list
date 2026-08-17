// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  modules: ["@nuxt/icon", "@nuxt/image", "nuxt-auth-utils"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
