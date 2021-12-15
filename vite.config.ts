import { defineConfig } from "vite";
import { resolve } from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "BeautifulSalat",
      fileName: (format) => `index.${format}.js`,
    },
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": resolve(".", "packages"),
    },
  },
  plugins: [dts()]
});
