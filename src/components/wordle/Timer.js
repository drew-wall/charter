import { Typography } from "@mui/material"
import fmtMSS from "../../utils/fmtmss"


const Timer = ({ elapsedTime }) => {
  return (
    <Typography variant='h5'>Elapsed Time: {fmtMSS(elapsedTime)}</Typography>
  )
  }

export default Timer
