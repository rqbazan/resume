require('esbuild').build({
  entryPoints: ['./src/server/main.tsx'],
  inject: ['./src/server/react-shim.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node14',
  outfile: '.lib/server.js',
  loader: {
    '.ttf': 'dataurl',
  },
})
