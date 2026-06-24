// nitro.config.ts — project root
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  vercel: {
    config: {
      version: 3,
      images: {
        domains: [],
        sizes: [640, 750, 828, 1080, 1200, 1920],
        minimumCacheTTL: 60,
        formats: ["image/webp"],
      },
    },
  },
});