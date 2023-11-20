import React, { memo } from 'react'
import Button from '@mui/material/Button'

const Stepper = ({ text, handler }) => {
  console.log('Stepper rendered')
  return (
    <Button variant="contained" sx={{ mr: 1 }} onClick={handler}>{text}</Button>
  )
}

export default memo(Stepper)
