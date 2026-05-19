import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // Explicitly bundle for Vercel Serverless rules
      }),
    ],
    define: {
      // Safely globalizes React to prevent 'React is not defined' crashes in production
      React: "window.React",
    },
  },
});
