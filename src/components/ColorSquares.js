import { useState } from 'react'

const Square = ({ color, index, handleClick }) => {
  return <div
    style={{
      height: '50px',
      width: '50px',
      margin: '10px',
      border: '1px solid black',
      backgroundColor: color
    }}
    onClick={() => handleClick(index)}
  ></div>
}

const ColorSquares = () => {
  const [colors, setColors] = useState(['red', 'green', 'red'])

  const handleClick = idx => {
    const newColors = [...colors]
    if (colors[idx] === 'green') {
       newColors[idx] = 'red'
       newColors.push('green')
       setColors(newColors)
    }
    else if (colors[idx] === 'red') {
      setColors(newColors.toSpliced(idx,1))
    }
  }

  return <>
    {colors.map((color,idx) => {
      return <div>
        <Square key={idx}
          index={idx}
          handleClick={handleClick}
          color={color}/>
      </div>
    })}
  </>
}

export default ColorSquares
