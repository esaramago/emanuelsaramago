import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import keystatic from "@keystatic/astro"
import vercel from "@astrojs/vercel"

export default defineConfig({
  output: "static",
  adapter: vercel(),
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    keystatic(),
    {
      name: "localized-routes",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({ pattern: "/en", entrypoint: "./src/pages/index.astro" })
          injectRoute({ pattern: "/en/work", entrypoint: "./src/pages/trabalho.astro" })
          injectRoute({ pattern: "/en/meeting", entrypoint: "./src/pages/reuniao.astro" })
        },
      },
    },
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      weights: [400, 500, 700],
    }
  ]
})