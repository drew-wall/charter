import { useState } from 'react'

const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initValue)
  }

  return [counter, increment, decrement, reset]
}

export default useCounter