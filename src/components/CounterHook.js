import React from 'react'
import useCounter from '../hooks/useCounter'
import { Typography } from '@mui/material'


const  CounterHook = () => {
  const [counter, increment, decrement, reset] = useCounter()    

  return (
    <>
    <Typography variant="h4">Counter Custom Hook</Typography>
     <Typography variant="h5">{counter}</Typography>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default CounterHook