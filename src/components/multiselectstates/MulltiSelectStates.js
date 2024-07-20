import React, { useState } from 'react'
import states from './states'

function MulltiSelectStates() {
  const [showStates, setShowStates] = useState(false)
  const [statesSelected, setStatesSelected] = useState([])

  const toggleShowStates = () => {
    setShowStates(prev => !prev)
  }

  const stateSelectedIdx = code => {
    return statesSelected.findIndex(s => s.code === code)
  }

  const handleChange = e => {
    const [code, name] = e.target.value.split(' ')
    const idx = stateSelectedIdx(code)

    if (idx !== -1) {
      setStatesSelected(statesSelected.toSpliced(idx, 1))
    }
    else {
      setStatesSelected([...statesSelected, { code, name }])
    }
  }

  const isChecked = code => {
    if (stateSelectedIdx(code) > -1) return true
    return false
  }

  return (
    <>
      <h2>Multi Select States</h2>
      <div>
        <button className='MSS-button' onClick={toggleShowStates}>{statesSelected.length} -- Selected States</button>
      </div>
      {showStates && <div className='MSS-panel'>
        {states.map(({ name, code }) => {
          return (
          <label className={`MSS-label ${isChecked(code) ? 'MSS-label-selected' : ''}`}
            key={code}>
            <input type='checkbox' value={`${code} ${name}`}
              checked={isChecked(code)}
              onChange={(e) => handleChange(e)}  />
           {name}
          </label>)
        })}
      </div>}
    </>
  )
}

export default MulltiSelectStates