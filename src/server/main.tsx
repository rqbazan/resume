import './register-fonts'
import { renderToStream } from '~/react-pdf'
import { App, AppProps } from '~/app'

export function renderAppToStream(props: AppProps) {
  return renderToStream(<App {...props} />)
}
