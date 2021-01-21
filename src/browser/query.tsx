import * as React from 'react'
import type { AppProps } from '@app'

export function Query({ children }) {
  const [data, setData] = React.useState<AppProps>()

  React.useEffect(() => {
    // @ts-expect-error
    fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}${window.location.search}`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return data ? children(data) : null
}
