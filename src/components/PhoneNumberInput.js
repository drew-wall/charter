import React, { useState } from 'react'

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChange = e => {
    const numbers = e.target.value.replace(/[^0-9]/g, '') 
    const size = numbers.length

    if (size > 10) return
    const formatted = []

    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formatted.push('(')
      }
      formatted.push(numbers[i])

      if (size > 6 && i === 5) {
        formatted.push('-')
      }

      if (size > 3 && i === 2) {
        formatted.push(') ')
      }
    }
    setPhoneNumber(formatted.join(''))
  }

  return (
    <>
      <h3>PhoneNumberInput</h3>
      <input type='text' value={phoneNumber}
      onChange={handleChange} />
    </>
  )
}

export default PhoneNumberInput