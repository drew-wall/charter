import React, { useState, useCallback } from 'react'
import Stepper from './stepper'

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
     <h3>{count}</h3>
     <Stepper text='+' handler={handleInc}/>
     <Stepper text='-' handler={handleDec}/>
    </>
  )
}

export default Counter