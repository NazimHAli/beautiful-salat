require("esbuild").buildSync({
  entryPoints: ["./src/prayerTimes.ts"],
  format: "esm",
  bundle: true,
  minify: true,
  entryNames: "index.es",
  outdir: "./build",
});
