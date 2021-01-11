import { Font } from '@react-pdf/renderer'

Font.register({
  family: 'Quicksand',
  fonts: [
    { src: './public/fonts/quicksand-v20-latin-regular.ttf' },
    { src: './public/fonts/quicksand-v20-latin-300.ttf', fontWeight: 300 },
    { src: './public/fonts/quicksand-v20-latin-600.ttf', fontWeight: 600 }
  ]
})

Font.register({
  family: 'OpenSans',
  fonts: [
    { src: './public/fonts/open-sans-v17-latin-regular.ttf' },
    { src: './public/fonts/open-sans-v17-latin-600.ttf', fontWeight: 600 },
    { src: './public/fonts/open-sans-v17-latin-700.ttf', fontWeight: 700 }
  ]
})
