import { defineConfig } from "@lovable.dev/vite-tanstack-config"; // Keep Lovable's native wrapper import
import { nitro } from "nitro/vite";

export default defineConfig({
  // This passes configurations securely through the Lovable wrapper
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // Force Nitro to bundle explicitly for Vercel serverless rules
      }),
    ],
  },
});