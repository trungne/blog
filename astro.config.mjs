import { defineConfig } from 'astro/config';
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), ["STORYBLOK", "ASTRO"])

export default defineConfig({
  server: {
    port: +env.ASTRO_APP_PORT || 3000,
    host: true,
  },
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel()
});