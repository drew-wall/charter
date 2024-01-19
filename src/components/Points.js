import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'

function Points() {
  const [points, setPoints] = useState([])
  const [undo, setUndo] = useState([])

  const handleClick = e => {
    const { pageX, pageY } = e
    setPoints(p => [...p, { pageX, pageY }])
  }

  const handleUndo = () => {
    if (!points.length) return
    const point = points.pop()
    setUndo(u => [...u, point])
  }

  const handleRedo = () => {
    if (!undo.length) return
    const un = undo.pop()
    setPoints(p => [...p, un])
  }

  return (
    <>
      <Typography variant='h3'>Click for Dots</Typography>
      <Button disabled={points.length === 0} onClick={handleUndo}>Undo</Button>
      <Button disabled={undo.length === 0} onClick={handleRedo}>Redo</Button>
      <div
        onClick={handleClick}
        style={{ height: '500px', width: '750px', border: 'solid black 2px'}}>
        {points.map((p, idx) => 
          <div 
            key={idx}
            style={{ 
              borderRadius: '50%', color: 'blue', height: '10px', width: '10px',
              background: 'blue', position: 'absolute',
              top: (p.pageY - 5)+'px', left: (p.pageX - 5)+'px'}}>
          </div>)}
      </div>
    </>

  )
}

export default Points