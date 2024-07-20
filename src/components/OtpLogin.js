import React, { useState, useRef, useEffect } from 'react'


const OtpLogin = ({ optLen = 6}) => {
  const [otp, setOtp] = useState(Array(optLen).fill(''))

  const inputRefs = useRef([])

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

  const otpComplete = () => {
    return otp.every(s => s)
  }

  const handleChange = e => {
    if (isNaN(e.target.value)) return
    const newOtp = [...otp]
    const idx = +e.target.name
    
    if (e.target.value) {
      if (idx < otp.length - 1) {
        inputRefs.current[idx + 1].focus()
      }
    }
    newOtp[idx] = e.target.value
    setOtp(newOtp)
  }

  const handleClick = () => {
    alert(`PassCode Entered: ${otp.join('')}`)
  }

  return (
    <>
    <h2>OTP Login: (numbers only)</h2>
      <div>
        {otp.map((el, idx) => 
          <input
            ref={elem => inputRefs.current[idx] = elem}
            className='OTP-input'
            key={idx} 
            value={el}
            name={idx}
            type='text' 
            maxLength='1'
            onChange={handleChange} />
        )}
      </div>
      <div>
        {otpComplete() &&<button onClick={handleClick}>Continue...</button>}
      </div>
    </>
  )
}

export default OtpLogin