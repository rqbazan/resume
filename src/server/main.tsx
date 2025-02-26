import { App, type AppProps } from '~/app'
import { renderToStream } from '~/react-pdf'
import './register-fonts'

export function renderAppToStream(props: AppProps) {
  return renderToStream(<App {...props} />)
}
