import { Typography } from '@mui/material'
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
    <Typography variant="h4" sx={{ my: 2 }}>
      {data && data.message}
    </Typography>
  )
}

export default MySimpleComponent
