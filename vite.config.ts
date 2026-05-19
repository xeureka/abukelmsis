import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import inject from "@rollup/plugin-inject"; // Usually available by default in modern bundler environments

export default defineConfig({
  vite: {
    plugins: [
      nitro({
        preset: "vercel", 
      }),
    ],
    // Force Vite/Rollup to define global React if an optimization step strips it
    build: {
      rollupOptions: {
        plugins: [
          inject({
            modules: {
              React: 'react',
            },
          }),
        ],
      },
    },
  },
});