import { useState, useEffect } from 'react'

const useLocalStorage = (key, item = '') => {
  const [value, setValue] = useState(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(item)
    )
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
