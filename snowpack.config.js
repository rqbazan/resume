const nodePolyfills = require('rollup-plugin-node-polyfills')

module.exports = {
  mount: {
    src: '/'
  },
  plugins: ['@snowpack/plugin-dotenv'],
  packageOptions: {
    polyfillNode: false,
    rollup: {
      plugins: [nodePolyfills()]
    }
  }
}
