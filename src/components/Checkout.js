import React, { useState, useEffect, useRef } from 'react'
import { Typography, Input, Button } from '@mui/material'


function Checkout() {
  const [numItems, setNumItems] = useState()
  const [lanes, setLanes] = useState([[], [], [], [], []])
  let interval = useRef()

  const isLanesEmpty = () => {
    for (let i = 0; i < lanes.length; i++) {
      if (lanes[i][0]) return false
    }
    return true
  }

  const processCheckout = () => {
    const newlanes = [...lanes]
    for (let i = 0; i < lanes.length; i++) {
      if (lanes[i].length) {
        newlanes[i][0] = lanes[i][0] - 1
        if (newlanes[i][0] === 0) {
          newlanes[i].shift()
        }
      }
    }
    setLanes(newlanes)
  }

  useEffect(() => {
    if (isLanesEmpty()) {
      clearInterval(interval.current)
    }
    else {
      interval.current = setInterval(() => {
        processCheckout()
      }, 1000)
    }

    return () => clearInterval(interval.current)
  }) 

  const handleNumItems = e => {
    setNumItems(+e.target.value)
  }

  const handleCheckout = () => {
    if (!numItems > 0) return
    let lane = []
    for(let i = 0; i < lanes.length; i++) {
      const cnt = lanes[i].reduce((acc, val) => acc + val, 0)
      lane.push(cnt)
    }
    const idx = lane.findIndex(el => el === Math.min(...lane))
    const newlanes = [...lanes]
    newlanes[idx].push(numItems)
    setLanes(newlanes)
  }

  return (
    <>
      <Typography sx={{ mt: 5 }}variant="h3">Checkout</Typography>
      <Input sx={{ ml: 3, mr: 3 }} name="numitems" value={numItems} min="1" onChange={handleNumItems} type="number" />
      <Button disabled={!numItems > 0} variant='outlined' onClick={handleCheckout}>Checkout</Button>
      {lanes.map((l, idx) => 
        <div key={idx} style={{ marginRight: '15px' }}>Lane {idx+1}: 
          {lanes[idx].map((q, qidx) => <span style={{ marginLeft: '5px' }}key={idx+qidx}>{q}, </span>)}
        </div>)}
    </>
  )
}

export default Checkout