// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://milettezzo.com",
  output: "server",
  adapter: vercel({}),
});
