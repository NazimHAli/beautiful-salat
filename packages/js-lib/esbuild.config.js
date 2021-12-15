require("esbuild").buildSync({
  entryPoints: ["./src/prayerTimes.ts"],
  format: "esm",
  bundle: true,
  minify: true,
  entryNames: "index.es",
  outdir: "./build",
});

require("esbuild").buildSync({
  entryPoints: ["./src/prayerTimes.ts"],
  format: "cjs",
  bundle: true,
  minify: true,
  entryNames: "index.cjs",
  outdir: "./build",
});

require("esbuild").buildSync({
  entryPoints: ["./src/prayerTimes.ts"],
  format: "iife",
  bundle: true,
  minify: true,
  entryNames: "index.iife",
  outdir: "./build",
});
