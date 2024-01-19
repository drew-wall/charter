import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'

const colors = ['red', 'yellow', 'green']

function StopLight() {
  const [colorIdx, setColorIdx] = useState(0)

  useEffect(() => {
    let timeout = (colorIdx === 0 || colorIdx === 2) ? 10000 : 5000
    const interval = setInterval(() => {
      if (colorIdx === 0) {
        setColorIdx(2)
      }
      else if (colorIdx === 1) {
        setColorIdx(0)
      }
      else {
        setColorIdx(1)
      }
    }, timeout)

    return () => clearInterval(interval)
  }, [colorIdx])

  return (
    <>
      <Typography sx={{ mt: 3, mb: 1 }} variant='h3'>StopLight</Typography>
      {colors.map((_, idx) => 
        <Box key={idx} sx={{ mb: 1 }}
          style={{ borderRadius: '50%', height: '50px', width: '50px',
            backgroundColor: idx === colorIdx ? colors[colorIdx] : 'gray' }}>
        </Box>
      )}
    </>
  )
}

export default StopLight