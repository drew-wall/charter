import React, { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import Typography from '@mui/material/Typography'

const Myinput = () => {
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value)

  const handleChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    console.log(debounceValue)
  }, [debounceValue])


  console.log('Myinput rendered')
  return (
    <>
    <Typography sx={{ mt: 3 }}variant="h4">Debounce example</Typography>
      <Box sx={{ my: 2 }}>
        <Input placeholder="Enter some text" name="myinput" type="text" onChange={handleChange}/>
       <Typography variant="h5">{debounceValue}</Typography>
      </Box>
    </>
  )
}

export default Myinput