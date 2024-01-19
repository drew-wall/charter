import React, { useState } from 'react'
import { Typography } from '@mui/material'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
const panels = ['Panel 1', 'Panel 2', 'Panel 3']

function TabPanels() {
  const [currTab, setCurrTab ] = useState(0)

  const handleClick = idx => {
    setCurrTab(idx)
  }

  const getColor = idx => {
    if (idx === currTab) return 'blue'
    return 'black'
  }

  return (
    <>
      <Typography variant='h3'>Tab Panels</Typography>
      <div style={{ display: 'flex', gap: '10px' }}>
        {tabs.map((tab, index) =>
          <div key={index}
            onClick={() => handleClick(index)}
            style={{ 
              cursor: 'pointer',
              color: `${getColor(index)}`,
              fontSize: '20px',
              borderBottom: `3px solid ${getColor(index)}` }}>
            {tab}
          </div>
        )}
      </div>
      <h3>{panels[currTab]}</h3>
    </>
  )
}

export default TabPanels