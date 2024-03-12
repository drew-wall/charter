import React, { useState } from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import fmtMSS from '../../utils/fmtmss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ResultsModal({ results }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const sortResults = [...results].sort((a, b) => b.date - a.date)

    const numResults = results.length
    const avgTime = Math.round(results.reduce((acc, val) => acc + val.time, 0) / numResults)
    const pctCorrect = results.filter(r => r.success === true).length / numResults*100

  
    return (
      <div>
        <Button onClick={handleOpen}>Show Results History</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Results History - 
               {` Plays: ${numResults}, `}
               {`Correct: ${pctCorrect.toFixed(0)}%, `}
               {`Avg Time: ${fmtMSS(avgTime)}`}
            </Typography>
             {sortResults.map((result, idx) =>
              <div key={idx}>
                <span>word: {result.word}</span>
                <span>, guess: {result.guess}</span>
                <span>, correct: {result.success.toString()}</span>
                <span>, time: {fmtMSS(result.time)}</span>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    )
}

export default ResultsModal