import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'


const data =
   [
    { country: 'USA', capital: 'Washington DC' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'England', capital: 'London'},
    { country: 'France', capital: 'Paris'},
    { country: 'Germany', capital: 'Berlin'},
  ]

const countries = data.map(d => d.country)
const capitals = data.map(d => d.capital)

export default function CountryCapitalGame() {
  

  const [options, setOptions] = useState([...countries, ...capitals])
  const [selected, setSelected] = useState([])
  const [matched, setMatched] = useState(null)

  useEffect(() => {
    if (selected.length === 2) {
      const [a, b] = [...selected]
      let matched = false
      data.forEach(v => {
        if ((a === v.country || a === v.capital) &&
             (b === v.country || b === v.capital)
        ) {
          matched = true
        }
      })
      setMatched(matched)
    }
  }, [selected])

  const handleClick = e => {
    const value = e.target.value
    setMatched(null)
    if (selected.includes(value)) {
      setSelected((prev) => prev.filter(s => s !== value))
    }
    else {
      if (selected.length === 2) {
        setSelected([value])
      }
      else {
        setSelected((prev) => [...prev, value])
      }
    }
    setOptions((prev) => [...prev.sort(() => Math.random() - 0.5)])
  }

  const getVariant = (option) => {
    if (selected.includes(option)) {
      return 'contained'
    }
    return 'outlined'
  }

  const getColor = (option) => {
    if (selected.includes(option)) {
      if (matched === false) {
        return 'error'
      }
      else if (matched === true) {
        return 'success'
      }
      else {
        return 'primary'
      }
    }
    return 'primary'
  }

  return (
    <>
      <Typography variant="h4" mb={1}>Country Capital Game</Typography>
      {options.map(option =>
        <Button
          key={option}
          value={option}
          onClick={handleClick}
          sx={{ ml: 1 }}
          color={getColor(option)}
          variant={getVariant(option)}>
          {option}
        </Button>
      )}
      <Typography variant="h5" mt={1}>{matched === true ? 'Correct!' : matched === false ? 'Wrong!' : null}</Typography>
    </>
  )
}
