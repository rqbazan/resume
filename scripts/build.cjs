require('esbuild').build({
  entryPoints: ['./src/server/main.tsx'],
  bundle: true,
  minify: true,
  platform: 'node',
  target: 'node18',
  outfile: '.lib/server.cjs',
  loader: {
    '.ttf': 'dataurl',
  },
})
