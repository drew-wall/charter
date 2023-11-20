import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJoke } from '../actions/joke'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

function Joke() {
  const [showPl, setShowPl] = useState(false)
  const { joke, punchline, loading, error } = useSelector(state => state.joke)
  const dispatch = useDispatch()

  console.log('Joke rendered')
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', border: 'solid blue 2px', p: 3, ml: 3 }}>
      <Button variant="contained" onClick={() => {dispatch(getJoke()); setShowPl(false)}}>Get a Joke</Button>
      <Box sx={{ display: 'flex', height: '50%' }}>
        {loading ? <CircularProgress /> : 
         <Typography variant="h5" gutterBottom >{joke}</Typography>}
      </Box>
      {error && <div>{error}</div>}
      {joke && <Button variant="contained" onClick={() => setShowPl(true)}>Show Punchline</Button>}
      {showPl && <Typography variant="h5">{punchline}</Typography>}
    </Box>
    </>
  )
}

export default Joke
