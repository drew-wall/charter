import React, { useState, useEffect } from 'react'
import useDelayText from '../hooks/useDelayText'
import axios from 'axios'


const DelayText = () => {
  const [data, setData] = useState('')
  const [file, setFile] = useState('README.md')
  const [filename, setFileName] = useState('')
  const [error, setError] = useState('')
  const [delay, setDelay] = useState(15)


  useEffect(() => {
    setError('')
    console.log(filename)
    if (filename) {
      axios.post('http://localhost:3001/test/file', {
        filename: filename
      })
      .then(response => setData(response.data))
      .catch(err => setError(`File not found: ${filename}`))
    }
  }, [filename])

   const chars = useDelayText(data, delay)

   const getFile = () => {
     setFileName(file)
   }

  return (
    <>
    <h2>Display file contents delaying each character by selected delay in ms</h2>
    {error &&  <div>{error}</div>}
      <input style={{ fontSize: '22px', width: '500px', marginRight: '10px' }} value={file} type='text' placeholder='Enter file name' onChange={(e) => setFile(e.target.value)} />
      <label> Delay(ms)
        <input style={{ fontSize: '22px', width: '60px', marginRight: '10px' }} type='number' value={delay} placeholder='Choose Delay in ms' onChange={(e) => setDelay(e.target.value)} />
      </label>
      <button style={{ fontSize: '22px' }} onClick={getFile}>Get File</button>
      <pre style={{ overflow: 'auto', backgroundColor: 'black', 
        color: 'wheat', fontSize: '18px', paddingLeft: '8px',
        whiteSpace: 'pre-wrap', wordBreak: 'keep-all',
        width: '900px', height: '1000px' }}>{chars}</pre>
    </>
  )
}


export default DelayText