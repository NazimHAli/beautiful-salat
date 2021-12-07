import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/utils/PrayerTimes.ts",
            name: "BeautifulSalat",
            fileName: (format) => `beautiful-salat.${format}.js`,
        },
    },
    plugins: [svelte()],
    resolve: {
        alias: {
            "@": resolve(".", "src"),
        },
    },
});
