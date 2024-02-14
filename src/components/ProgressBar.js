import React, { useState, useEffect, useRef } from 'react'
import { Typography } from '@mui/material'

const ProgressBar = () => {
  const [value, setValue] = useState(0)
  let interval = useRef()

  useEffect(() => {
    if (value >= 100) {
      clearInterval(interval.current)
    }
  }, [value])

  const start = () => {
    setValue(0)
    clearInterval(interval.current)
    interval.current = setInterval(() => setValue(prev => prev + 1), 100)
  }

  return (
    <>
      <Typography sx={{ mt: 3, mb: 2 }} variant='h3'>Progress Bar</Typography>
      <div style={{ marginBottom: '5px' }}><button onClick={start}>Start</button></div>
      <div className="progressBar">
        <span style={{ color: value < 50 ? 'black' : 'white' }}>{value}%</span>
        <div style={{ width: `${value}%` }}>
        </div>
      </div>
      <Typography sx={{ mt: 2 }} variant='h5'>
        {value < 100 && value > 0 ? 'Loading...' : value >= 100 ? 'Complete!' : 'Starting...'}
      </Typography>
    </>
  )
}

export default ProgressBar