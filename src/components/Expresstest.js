import React, { useState, useEffect } from 'react'
import axios from 'axios'

 const Expresstest = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.post('http://localhost:3001/test', {
      message: 'test message'
    })
    .then(response => setData(response.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <h3>{data && data.message}</h3>
  )
}

export default Expresstest