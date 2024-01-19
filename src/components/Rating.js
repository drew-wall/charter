import React, { useState } from 'react'
import { Typography, Button, Box } from '@mui/material'
import { borders } from '@mui/system';

const styles = {
  button: { 

  }
}

function Rating() {
  const [selected, setSelected] = useState()

  return (
    <>
      <Box sx={{ borderRadius: 5, mt: 5, width: 300, height: 300, background: '#1f1f1f' }}>
        <Typography sx={{ pt: 3, pl: 3, color: 'white' }} variant='h5'>How Did We Do?</Typography>
        <Typography sx={{ mt: 2, pl: 3, pr: 3, color: 'grey', fontSize: 12 }}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Typography>
        <Box sx={{ mt: 1, pl: 3 }}>
          {[1,2,3,4,5].map(el =>
            <button key={el}
              onClick={() => setSelected(el)}
              style={{ marginRight: '10px', color: 'white', border: '1px solid gray', borderRadius: '50%', height: '40px', width: '40px', background: el === selected ? 'orange' : '#1f1f1f' }}>{el}</button>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Rating