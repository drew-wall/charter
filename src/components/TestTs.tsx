import React, { useState } from 'react'
import { Typography } from '@mui/material'

function TestTs() {
  type Tusers = {
    first: string;
    last: string;
  }
  const users: Tusers[] = [{first: 'a', last: 'b'}]

  const [value, setValue] = useState(0)
  return (
    <>
     <Typography sx={{ mt: 3 }} variant='h3'>TypeScript Test</Typography>
     <div onClick={() => setValue(prev => prev + 1)}>{value}</div>
     {users.map((x, idx) =>
      <div key={idx}>{x.first} {x.last}</div>
     )}
    </>
  )
}

export default TestTs