import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [
    devtools(),
    tanstackRouter({
      autoCodeSplitting: true,
      generatedRouteTree: "./src/route-tree.gen.ts",
      routesDirectory: "./src/routes",
      target: "react",
    }),
    react(),
  ],
});

export default config;
