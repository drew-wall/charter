import { useState } from 'react'

function useRandomUsers() {
  const [users, setUsers] = useState([])
  const [currIndex, setCurrIndex] = useState(-1)
  const [loading, setLoading] = useState(false)

  const fetchUser = () => {
    setLoading(true)
    return fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(response => {
      const {
        name: { first, last },
        picture: { thumbnail },
      } = response.results[0]

       setUsers(prev => [...prev, { first, last, thumbnail }])
     })
    .finally(() => setLoading(false))
  }

  const next = () => {
    if (!users[currIndex + 1])
      fetchUser()
    setCurrIndex(prev => prev + 1)
  }

  const previous = () => {
     if (currIndex > 0) {
      setCurrIndex(prev => prev - 1)
     }
  }
  
  return [users, currIndex, loading, next, previous]
}

export default useRandomUsers