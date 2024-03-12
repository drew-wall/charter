import { Typography } from "@mui/material"
import fmtMSS from "../../utils/fmtmss"


const Timer = ({ elapsedtime }) => {
    return (
      <Typography variant='h5'>Elapsed Time: {fmtMSS(elapsedtime)}</Typography>
    )
  }

export default Timer
