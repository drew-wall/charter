import React, { useState, useEffect } from 'react'
import useDelayText from '../hooks/useDelayText'
import axios from 'axios'


const DelayText = () => {
  const [data, setData] = useState('')
  const [file, setFile] = useState('src/components/DelayText.js')
  const [filename, setFileName] = useState('')
  const [error, setError] = useState('')
  const [delay, setDelay] = useState(15)
  const [text, setText] = useState('')


  useEffect(() => {
    setError('')

    console.log(filename)
    if (filename) {
      axios.post('http://localhost:3001/test/file', {
        filename: filename
      })
      .then(({ data }) => {
        if (typeof data === 'object') {
          setData(JSON.stringify(data, null, 2))
        }
        else {
          setData(data)
        }
      })
      .catch(err => setError(`File not found: ${filename}`))
    }
  }, [filename])

   const chars = useDelayText(data, delay)

   const getFile = () => {
     setText('')
     setFileName(file.trim())
   }

  const getText = () => {
    setData(text)
    setFile('')
    setFileName('')
  }

  return (
    <>
    <h1>Display text delaying each character by selected delay in ms</h1>
    {error &&  <div style={{ fontSize: '20px', color: 'red' }}>{error}</div>}
      <input style={{ fontSize: '22px', width: '500px', marginRight: '10px' }} 
        value={file} type='text' placeholder='Enter file name'
        onChange={(e) => setFile(e.target.value)} />
      <label> Delay(ms): 
        <input style={{ fontSize: '22px', width: '60px', marginRight: '10px' }}
          type='number' value={delay} placeholder='Choose Delay in ms'
          onChange={(e) => setDelay(e.target.value)} />
      </label>
      <button style={{ fontSize: '22px' }} disabled={!file}
         onClick={getFile}>Get File</button>
      <br />
        <div style={{ fontSize: '22px', margin: '10px 10px 10px 10px' }}>
          Or, just enter some text to see delay in action:
        </div>
        <textarea style={{ fontFamily: 'sans-serif', fontSize: '18px' }} 
           rows='5' cols='60' value={text}
           onChange={(e) => setText(e.target.value) } />
      <button style={{ fontSize: '22px', marginLeft: '10px' }}
        disabled={!text} onClick={getText}>Submit Text</button>
      <pre className='pre-delay'>{chars}</pre>
    </>
  )
}


export default DelayText