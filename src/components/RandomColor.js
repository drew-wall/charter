import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@mui/material'


const hexstr = '01234567890ABCDEF'

const getRandomColor = () => { 
  const randomhex = Array(6).fill('')
    .map(x => hexstr[Math.floor(Math.random() * hexstr.length)])
    .join('')
  return `#${randomhex}`
}

function RandomColor() {
  const [color, setColor] = useState('#000000')
  const [result, setResult] = useState('')

  useEffect(() => {
    setColor(getRandomColor())
  }, [])
  
  const setRandomColor = (e) => {
    if (color === e.target.firstChild.nodeValue) {
      setResult('Correct!')
    }
    else {
      setResult('Wrong!')
    }
    setColor(getRandomColor())
  }

  return (
    <>
      <Typography variant='h3' sx={{ mt: 3 }}>Random Colors</Typography>
      <div style={{ height: '250px', width: '250px', backgroundColor: color }}></div>
      <div style={{ marginTop: '20px' }}>
        {[0,1,2].sort(() => Math.random() - 0.5).map(i => 
        <Button key={i} onClick={e => setRandomColor(e)} 
          variant='outlined'>{i === 0 ? color : getRandomColor()}</Button>
        )}
      </div>
      <Typography>{color}</Typography>
      <Typography variant='h5'>{result}</Typography>
    </>
  )
}

export default RandomColor