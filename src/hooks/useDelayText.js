import { useEffect, useState } from 'react'


const useDelayText = (str = '', delay = 100) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let idx = 0
    let chrs = ''
    const interval = setInterval(() => {
       chrs += str.charAt(idx)
       setText(chrs)
       idx += 1
       if (idx > str.length) {
         clearInterval(interval)
       }
    }, delay)
    return () => { clearInterval(interval) }
  }, [str, delay])

  return text

}

export default useDelayText
