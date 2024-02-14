require("esbuild").build({
  entryPoints: ["./src/server/main.tsx"],
  inject: ["./src/server/react-shim.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  target: "node18",
  outfile: ".lib/server.cjs",
  loader: {
    ".ttf": "dataurl",
  },
});
