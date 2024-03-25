import React, { memo } from 'react'
import { Typography, Rating } from '@mui/material'
import fmtMSS from '../../utils/fmtmss';


const lineRatios = [1, .83, .66, .49, .32, .17]
const timeRatios = [1, .9, .8, .7, .6, .5, .4, .3, .2, .1]

function ResultsSummary({ results }) {
  console.log('Results Summary rendered')
  const numResults = results.length
  const correctResults = results.filter(r => r.success === true)
  const avgTime = Math.round(results.reduce((acc, val) => acc + val.time, 0) / numResults)
  const numCorrect = correctResults.length
  const pctCorrect = (numCorrect / numResults * 100)
  const avgLineCorrect = correctResults.reduce((acc, val) => acc + val.line, 0) / numCorrect

  let lineScore = 0
  for (let i = 0; i < lineRatios.length; i++) {
    if (Math.round(avgLineCorrect) - 1 === i) {
      lineScore = lineRatios[i]
      break
    }
  }

  let timeScore = 0
  for (let i = 0; i < timeRatios.length; i++) {
    if (Math.floor(avgTime / 60) - 1 === i) {
      timeScore = timeRatios[i]
      break
    }
    timeScore = .1
  }

  const totalScore = Math.round(((100 * lineScore) + (100 * timeScore)) * (pctCorrect / 100))
  console.log('Total Score', totalScore)

  return (
    <>
      <Typography variant='h6'>
         {` Plays: ${numResults}, `}
         {`Correct: ${numCorrect} (${pctCorrect.toFixed(0)}%), `}
         {`Avg. Time: ${fmtMSS(avgTime)}, `}
         {`Avg. Guesses to Solve: ${avgLineCorrect.toFixed(1)}`}
        <Rating precision={0.5} value={Math.round(totalScore / 10)} readOnly max={10} />
      </Typography>
    </>
  )
}

export default memo(ResultsSummary)