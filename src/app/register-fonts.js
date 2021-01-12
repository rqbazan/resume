import path from 'path'
import { Font } from '@react-pdf/renderer'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

function src(filename) {
  const root = serverRuntimeConfig.PROJECT_ROOT

  if (process.env.NODE_ENV === 'production') {
    return path.join(root, 'fonts', filename)
  }

  return path.join(root, 'public', 'fonts', filename)
}

Font.register({
  family: 'Quicksand',
  fonts: [
    { src: src('quicksand-v20-latin-regular.ttf') },
    { src: src('quicksand-v20-latin-300.ttf'), fontWeight: 300 },
    { src: src('quicksand-v20-latin-600.ttf'), fontWeight: 600 }
  ]
})

Font.register({
  family: 'OpenSans',
  fonts: [
    { src: src('open-sans-v17-latin-regular.ttf') },
    { src: src('open-sans-v17-latin-600.ttf'), fontWeight: 600 },
    { src: src('open-sans-v17-latin-700.ttf'), fontWeight: 700 }
  ]
})
