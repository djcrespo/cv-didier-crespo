import { truncate } from "node:fs/promises";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  app: {
    head: {
      title: "Didier Crespo Castilla - CV",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        { rel: "stylesheet", href: "/assets/css/main.css" },
        { rel: "stylesheet", href: "/css/swiper-slider.css" },
        { rel: "stylesheet", href: "/css/basic.css" },
        { rel: "stylesheet", href: "/css/layout.css" },
        { rel: "stylesheet", href: "/css/blogs.css" },
        { rel: "stylesheet", href: "/css/ionicons.css" },
        { rel: "stylesheet", href: "/css/magnific-popup.css" },
        { rel: "stylesheet", href: "/css/animate.css" },
        { rel: "stylesheet", href: "/css/owl.carousel.css" },
        { rel: "stylesheet", href: "/css/gradient.css" },
        { rel: "shortcut icon", href: "/images/favicons/favicon.ico" },
      ],
    },
  },
  ssr: true,
  compatibilityDate: "2024-11-22",
});