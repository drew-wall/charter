import React, { useState, useEffect } from 'react'

const getInitialGrid = () => {
  return ['0', '0', '0', '0', '0', '0', '0', '0', '0']
}

function WackAMole() {
  const [grid, setGrid] = useState(getInitialGrid())
  const [score, setScore] = useState(0)

  useEffect(() => {
    let interval = 
      setInterval(() => {
        const idx = Math.floor(Math.random() * 9)
        const newGrid = getInitialGrid()
        newGrid[idx] = 'M'
        setGrid(newGrid)
      }, 1700)

      return () => { clearInterval(interval) }
  }, [])

  const handleButtonClick = index => {
    if (grid[index] === 'M') {
      setScore(prev => prev + 1)
    }
  }
  return (
    <>
      <h3>WackAMole</h3>
      <div>Score: {score}</div>
      <div className='WAM-grid'>
        {grid.map((item, index) => (
          <button onClick={() => handleButtonClick(index)} 
            key={index}>
            <span 
              style={{ fontWeight: 'bold', color: item === 'M' ? 'red' : 'black' }}>{item}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

export default WackAMole