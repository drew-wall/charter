import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'

const grid = [
  [0, 1, 2],
  [3, 4, 1],
  [2, 4, 0]
]

const clearSelected = () => grid.map(r => r.map(c => false))


function MemoryGame() {
  const [gridSelected, setGridSelected] = useState(grid)
  const [prevSelected, setPrevSelected] = useState({})
  const [result, setResult] = useState('')

  useEffect(() => {
    const tout = setTimeout(() => {
      setGridSelected(() => clearSelected())
    }, 3000)
    
    return () => {clearTimeout(tout)}
  }, [])

  const handleClick = (ridx, cidx) => {
    if (gridSelected[ridx][cidx]) return
    setResult('')
    setPrevSelected(() => ({ row: ridx, col: cidx }))

    const newselected = [...gridSelected]
    newselected[ridx][cidx] = true
    setGridSelected(() => newselected)
    const { row, col} = prevSelected
    if (row >= 0 && grid[ridx][cidx] === grid[row][col]) {
      setResult('Correct!')
      setPrevSelected({})
    }
    else {
      if (row >= 0) {
       setResult('Wrong!')
       setPrevSelected({})
      }
      setTimeout(() => {
        setGridSelected(() => clearSelected())
      }, 2000)
    }  
  }

  // console.log(gridSelected)
  return (
    <>
      <Typography sx={{ mt: 3, mb: 1 }} variant='h3'>Memory Game</Typography>
      {grid.map((row, ridx) =>
        <div key={ridx} style={{ marginBottom: '15px' }}>
          {row.map((col, cidx) =>
            <div
              onClick={() => handleClick(ridx, cidx)}
              style={{ display: 'inline-block', height: '25px', width: '25px', marginRight: '15px', border: 'solid black 2px', textAlign: 'center' }}
              key={cidx}>{gridSelected[ridx][cidx] !== false ? col : '-'}</div>
          )}
        </div>)
      }
       <Typography variant='h4'>{result}</Typography>
    </>
  )
}

export default MemoryGame