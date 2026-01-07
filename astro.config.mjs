// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

export default {
  output: "server",
  adapter: vercel(),
};
