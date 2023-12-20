import React, { useState, useEffect, useRef } from 'react'
import { Button, Typography } from '@mui/material'

function Stopwatch() {
  const [timer, setTimer] = useState(0)
  const [action, setAction] = useState('pause')
  let interval = useRef()

  useEffect(() => {
    let intval = interval.current
    if (action === 'start') {
      intval = setInterval(() => {
        setTimer(t => t + 1 )}, 1000
      )
    }
    else if (action === 'pause') {
      clearInterval(intval)
    }
    else if (action === 'reset') {
      clearInterval(intval)
      setTimer(0)
    }
    return () => clearInterval(intval)
  }, [action])

  const handleClick = e => {
    setAction(e)
  }

  return (
    <>
    <Typography variant="h4">Stopwatch</Typography>
    <Typography>{timer}</Typography>
    <Button disabled={action === 'start'} onClick={() => handleClick('start')} variant='contained'>Start</Button>
    <Button disabled={action === 'pause'} onClick={() => handleClick('pause')} variant='contained'>Pause</Button>
    <Button disabled={action === 'reset'} onClick={() => handleClick('reset')} variant='contained'>Reset</Button>
    </>
  )
}

export default Stopwatch