import * as React from 'react'

export function Query({ children }) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}${window.location.search}`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return data ? children(data) : null
}
