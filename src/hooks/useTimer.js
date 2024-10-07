import { useState, useEffect, useRef } from 'react'

// NOTE! This doesn't work, always returns zero
const useTimer = (startTimer = false, interval = 1000) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const timerRef = useRef()

  useEffect(() => {
    if (startTimer && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1)
      }, interval)
    }
    return () => clearInterval(timerRef.current)
  }, [startTimer, interval])
  
  console.log('Elapsed Time: ', elapsedTime)
  return [startTimer, elapsedTime]
}

export default useTimer
