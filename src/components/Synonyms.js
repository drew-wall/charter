import React, { useState} from 'react'
import { Button, Input, Typography } from '@mui/material'

function Synonyms() {
  const [word, setWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const getSynonyms = (w) => {
    setError('')
    fetch(`https://api.datamuse.com/words?rel_syn=${w}`)
    .then(resp => resp.json())
    .then(setData)
    .catch(error => {
      console.error('Error:', error)
    })
  }

  const getItemSynonyms = w => {
    setWord(() => w)
    getSynonyms(w)
  }

  // console.log('Error', error)
  
  return (
    <>
     <Typography sx={{ mt: 5 }} variant="h3">Get Synonyms</Typography>
     <Input type='text' name='word' value={word} onChange={(e) => setWord(e.target.value)} />
     <Button sx={{ ml: 3 }} disabled={!word} variant='outlined' onClick={() => getSynonyms(word)}>Get Synonyms</Button>
     {error ? <Typography variant='h5'>{error}</Typography>
     :
     <ul>
       {data.map((w, idx) => <li onClick={() => getItemSynonyms(w.word)}  key={idx}>{w.word}</li>)}
     </ul>}   
    </>
  )
}

export default Synonyms