import React, { useState, memo, useMemo } from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import ResultsTable from './ResultsTable';
import ResultsSummary from './ResultsSummary';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 435,
    height: 420,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
  };

function ResultsModal({ results }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sortResults = useMemo(() => [...results].sort((a, b) => b.date - a.date), [results]) 
  
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
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Results History
            </Typography>
            <ResultsSummary results={results} />
            <ResultsTable results={sortResults} />
          </Box>
        </Modal>
      </div>
    )
}

export default memo(ResultsModal)