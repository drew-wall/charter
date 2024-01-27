import React, { useState, useMemo } from 'react'
import { Typography } from '@mui/material'

const Cells = ({ cells, addCell, changeCell }) => {
  return (
    <>
      {cells.map((cell, idx) =>
        <div key={idx} className='cell'>
          <span className="cell-span"
            onClick={() => addCell(idx+1)} key={idx}>&nbsp;
          </span>
          <input type="text" 
            maxLength="1"
            placeholder='_'
            name={cell}
            value={cell} 
            onChange={(e) => {changeCell(e, idx)} } />
        </div>
      )}
    </>
  )
}

function Cellinputs() {
  const [cells, setCells] = useState(['a', 'b', 'c'])

  const allcells = useMemo(() => cells.join(''), [cells])

  const changeCell = (e, idx) => {
    let newcells = [...cells]
    newcells[idx] = e.target.value
    setCells(newcells)
  }

  const addCell = idx => {
    setCells([...cells.slice(0, idx), '', ...cells.slice(idx)])
  }

  return (
    <main>
      <Typography sx={{ mt: 3, mb: 2 }} variant='h3'>Cell Inputs</Typography>
      <section className='cells'>
        <Cells cells={cells} addCell={addCell} changeCell={changeCell} />
      </section>
      <footer>
        <Typography variant='h4' sx={{ mt: 1 }}>{allcells}</Typography>
      </footer>
    </main>
  )
}

export default Cellinputs