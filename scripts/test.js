const assert = require('assert')
const { nodeFileTrace } = require('@vercel/nft')

async function main() {
  const files = ['./api/resume.js']

  const result = await nodeFileTrace(files, {
    ts: true,
    mixedModules: true
  })

  assert.deepStrictEqual(result.warnings, [])
}

main().catch(error => {
  console.log(error)
  process.exit(1)
})
