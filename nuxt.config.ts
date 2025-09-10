// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  
  // Configuración de la aplicación
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
    
    // Configuración base URL para assets y rutas
    baseURL: '/devcrespo/',
    
    // Configuración build assets
    buildAssetsDir: '/devcrespo/_nuxt/'
  },
  
  // Configuración del runtime
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? 'https://serveless.paramq.com/devcrespo' : ''
    }
  },
  
  // Configuración de nitro para el deploy
  nitro: {
    preset: 'node-server',
    serveStatic: true,
    baseURL: '/devcrespo',
    
    // Configuración para reverse proxy si es necesario
    routeRules: {
      '/devcrespo/**': { 
        proxy: { 
          to: '/**' 
        } 
      }
    }
  },
  
  // Configuración del router
  router: {
    base: '/devcrespo/',
    options: {
      strict: false
    }
  },
  
  // SSR activado
  ssr: true,
  compatibilityDate: "2024-11-22",
  
  // Configuración de build
  build: {
    publicPath: '/devcrespo/_nuxt/'
  },
  
  // Configuración de vite (opcional)
  vite: {
    server: {
      hmr: process.env.NODE_ENV === 'development' ? {} : false
    }
  }
});