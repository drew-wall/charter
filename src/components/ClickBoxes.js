import React, { useState, useEffect, useMemo } from 'react'
/*
 Component to dispoy boxes in array where value is 1,
 click on them to highlight to green. Once all have
 been selected then remove them last to first in a tiemout.
 It assumes an array of arrays, each array with 3 items per array
 of 0 or 1. 0 will be invisible, only 1's will be shown.
*/
const getBoxes = () => {
  return [[1,1,0],
         [1,1,1],
         [0,1,1],
         [1,1,0]
        ]
}

const ClickBoxes = () => {
  const [boxes] = useState(getBoxes().flat())
  const [selected, setSelected] = useState([])
  const [isRemoving, setIsRemoving] = useState(false)

  const boxCount = useMemo(() => { return boxes.filter(b => b).length}, [boxes])

  useEffect(() => {
     const removeBoxes = (len) => {
      const newSelected = [...selected]
       for (let i = 0; i < len; i++) {
         setTimeout(() => {
          newSelected.pop()
          setSelected([...newSelected])
          if (!newSelected.length) setIsRemoving(false)
        }, 1500 + (i * 1500))
      }
    }

    let len = selected.length
    if (boxCount === len && !isRemoving) {
      setIsRemoving(true)
      removeBoxes(len)
    }
  }, [selected, boxCount, isRemoving])

  const handleBoxClick = idx => {
    if (selected.includes(idx) || isRemoving) return
    setSelected(prev => [...prev, idx])
  }

  return (
    <>
      <h3>ClickBoxes</h3>
      <div className='box-panel'>
        {boxes.map((item, idx) => {
          return (
            <div key={idx} className='box-item'
              style={{ visibility: item === 0 ? 'hidden' : 'visible',
                       backgroundColor: selected.includes(idx) ? 'green' : 'white'}}
              onClick={() => handleBoxClick(idx)}>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ClickBoxes