const entryPoints = ["./index.ts"];

require("esbuild").buildSync({
  entryPoints: entryPoints,
  format: "esm",
  bundle: true,
  minify: true,
  entryNames: "index.es",
  outdir: "./build",
});

require("esbuild").buildSync({
  entryPoints: entryPoints,
  format: "cjs",
  bundle: true,
  minify: true,
  entryNames: "index.cjs",
  outdir: "./build",
});

require("esbuild").buildSync({
  entryPoints: entryPoints,
  format: "iife",
  bundle: true,
  minify: true,
  entryNames: "index.iife",
  outdir: "./build",
});
