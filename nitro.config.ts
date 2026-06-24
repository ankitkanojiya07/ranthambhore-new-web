// nitro.config.ts — project root
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  vercel: {
    config: {
      version: 3,
      images: {
        domains: [],
          sizes: [
            16, 32, 48, 64, 96, 128, 144, 256, 288,  // ← 144 and 288 were missing
            384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840
          ],
        minimumCacheTTL: 60,
        formats: ["image/webp"],
      },
    },
  },
});