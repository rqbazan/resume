const nodePolyfills = require('rollup-plugin-node-polyfills')

module.exports = {
  mount: {
    src: '/'
  },
  packageOptions: {
    polyfillNode: false,
    rollup: {
      plugins: [nodePolyfills()]
    }
  }
}
