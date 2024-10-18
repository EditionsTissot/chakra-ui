import { defineConfig } from "vite";
// import { resolve } from "path";

// https://vitejs.dev/config/
export const viteConfig = {
  plugins: [],
  root: "",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main:"src/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
    },
  },
};

export default defineConfig(viteConfig);
