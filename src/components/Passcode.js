import React, { useState } from 'react'

const numbers = [1,2,3,4,5,6,7,8,9,0]
const pw = '1234'

const Passcode = () => {
  const [passcode, setPasscode] = useState([])

  const handleClick = e => {
    const newPasscode = [...passcode, e.target.value]
    if (pw.length === newPasscode.length) {
      if (pw === newPasscode.join('')) {
        alert('password successful')
      }
      else {
        alert('password failed, try again')
      }
      setPasscode([])
    }
    else {
      setPasscode(newPasscode)
    }
  }

  return (
    <>
      <h2>Passcode</h2>
      <div className='passcode-div'>
      {numbers.map(num => 
        (<button value={num} onClick={(e) => handleClick(e)} key={num}>{num}</button>)
      )}
      </div>
    </>
  )
}

export default Passcode