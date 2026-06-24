// nitro.config.ts — project root
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  vercel: {
    config: {
      version: 3,
      images: {
        domains: [],
sizes: [
  // Tiny / icons
  16, 32, 48, 64, 96, 128, 144,
  // Thumbnails
  256, 288, 320, 384,
  // Mobile
  414, 640, 750, 828,
  // Tablet
  1024, 1080, 1200,
  // Tablet retina (iPad Pro etc.)
  1366, 1536, 1668,
  // Desktop
  1920, 2048,
  // Retina desktop
  2560, 3840
],
        minimumCacheTTL: 60,
        formats: ["image/webp"],
      },
    },
  },
});