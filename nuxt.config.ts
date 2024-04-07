// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-server-utils",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@sidebase/nuxt-auth",
  ],
  ssr: true,
  debug: false,
  dev: false,
  extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],

  imports: {
    autoImport: true,
    dirs: ["./stores"],
    presets: [
      // {
      //   from: "@nuxtjs/i18n",
      //   imports: ["useI18n"],
      // },
    ],
  },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English-US",
        file: "en-US.json",
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "Russian-RU",
        file: "ru-RU.json",
      },
    ],
    defaultLocale: "en-US",
  },
  routeRules: {
    "/": { prerender: true },
  },
  experimental: {
    sharedPrerenderData: true,
    // typedPages: true,
    cookieStore: true,
    viewTransition: false,
    // crossOriginPrefetch: true,
    inlineRouteRules: true,
  },
  plugins: ["~/plugins/toastify.ts"],
  components: [{ path: "~/components" }],
  test: false,
  router: {
    options: {
      hashMode: false,
      scrollBehaviorType: "smooth",
    },
  },
  sourcemap: {
    client: false,
    server: false,
  },
  features: {
    inlineStyles: false,
    noScripts: true,
  },
  app: {
    head: {
      title: "FurnitureHub",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
      ],
    },
    baseURL: "/",
    // pageTransition: {
    //   name: "page",
    //   mode: "out-in",
    // },
    rootId: "__nuxt",
    rootTag: "div",
    teleportId: "teleports",
    teleportTag: "div",
    layoutTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  alias: {
    "@": "/<srcDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: "/<srcDir>/assets",
    public: "/<srcDir>/public",
  },
  dir: {
    middleware: "middlewares",
  },
  vue: {
    // propsDestructure: true,
  },
  // server
  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },
  devServer: {
    port: 3022,
    url: "http://localhost:3022",
  },
  auth: {
    baseUrl: process.env.BASE_URL,
    provider: {
      type: "authjs",
    },
  },
  nitro: {
    storage: {
      fs: {
        driver: "fs",
        base: "./public/products",
      },
    },
  },
});
