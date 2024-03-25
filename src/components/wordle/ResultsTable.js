import React, { memo } from 'react'
import fmtMSS from '../../utils/fmtmss'

function ResultsTable({ results }) {
  console.log('Results table rendered')
  return (
    <>
      <table>
        <tbody>
        <tr style={{ backgroundColor: 'lightgray' }}>
          <th>Word</th>
          <th>Guess</th>
          <th>Time</th>
          <th>Line</th>
          <th>Date</th>
        </tr>
        {results.map((result, idx) =>
          <tr style={{ backgroundColor: result.success ? 'lightgreen' : 'salmon' }} key={idx}>
            <td>{result.word}</td>
            <td>{result.guess}</td>
            <td>{fmtMSS(result.time)}</td>
            <td>{result.line}</td>
            <td>{new Date(result.date).toLocaleString()}</td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  )
}

export default memo(ResultsTable)