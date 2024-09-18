// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/seo", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Inter: "200..700",
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
    },
  },

  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: false,
  },
  robots: {
    enabled: false,
  },
  seoExperiments: {
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  linkChecker: {
    enabled: false,
  },

  css: [
    "@/assets/css/custom.css", // Include the custom CSS globally
  ],
});
