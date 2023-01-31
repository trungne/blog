import { defineConfig } from "astro/config"
import storyblok from "@storyblok/astro"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/serverless"

const env = loadEnv("", process.cwd(), ["STORYBLOK", "ASTRO"])

export default defineConfig({
  server: {
    port: +env.ASTRO_APP_PORT || 3000,
  },
  integrations: [
    tailwind(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
        ["HomePage"]: "components/Home/index",
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
})
