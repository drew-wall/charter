import React, { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'

const calls = [
  { name: 'Sam', calls: 2 },
  { name: 'Amanda', calls: 4 },
  { name: 'Joe', calls: 5 },
  { name: 'Andrew', calls: 1 },
  { name: 'Sam', calls: 2 },
  { name: 'Jerry', calls: 1 },
  { name: 'Jerry', calls: 4 },
  { name: 'Ken', calls: 3 },
]

function Calls() {
  const [results, setResults] = useState([])
  const [searchValue, setSearchValue] = useState('')
  let debounceValue = useDebounce(searchValue)

  const getSortedResults = () => {
    const sumCalls = calls.reduce((acc, { name, calls }) => {
      acc[name] = acc[name] ? acc[name] += calls : acc[name] = calls
      return acc
    }, {})

    const sorted = Object.entries(sumCalls)
      .map(([name, calls]) => ({ name, calls }))
      .sort((a, b) => b.calls - a.calls)

    return sorted
  }

  useEffect(() => {
    setResults(getSortedResults())
  }, [])

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

  const filtered = results.filter(item => item.name.toLowerCase().includes(debounceValue.toLowerCase()))

  return (
    <>
      <h3>Calls</h3>
      <div>
        <input type='text' onChange={handleChange} />
      </div>
      <div>
        Debounce value: {debounceValue}
      </div>
      <div>
        <ul>
        {filtered.length > 0 &&
         filtered.map(result => {
          return (
            <li key={result.name}>
               <span>{result.name}: </span>
               <span>{result.calls}</span>
            </li>
          )
         })
        }
        </ul>
      </div>
    </>
  )
}

export default Calls