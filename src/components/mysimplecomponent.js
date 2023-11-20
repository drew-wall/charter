import React, { useEffect, useState } from 'react'

const MySimpleComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://techy-api.vercel.app/api/json')
      .then(response => response.json())
      .then(setData)
  }, [])

  console.log('simple component rendered')
  return (
    <h1>
      {data && data.message}
    </h1>
  )
}

export default MySimpleComponent
