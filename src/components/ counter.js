import React, { useState, useCallback } from 'react'
import Stepper from './stepper'
import { Typography } from '@mui/material'

const  Counter = () => {
  const [count, setCount] = useState(0)
  console.log('Counter rendered')

  const handleInc =  useCallback(() =>  {
    setCount(prev => prev + 1)
  }, [])

  const handleDec = useCallback(() =>  {
    setCount(prev => prev - 1)
  }, [])

  return (
    <>
    <Typography variant="h4">Counter</Typography>
     <Typography variant="h5">{count}</Typography>
     <Stepper text='+' handler={handleInc}/>
     <Stepper text='-' handler={handleDec}/>
    </>
  )
}

export default Counter