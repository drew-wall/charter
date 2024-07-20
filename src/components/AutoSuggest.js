import React, { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'

const items = [
  'banana',
  'apple',
  'peach',
  'cantalope',
  'blueberry',
  'orange',
  'lemon',
  'watermelon',
  'strawberry',
  'grape',
  'pineapple',
  'plum',
  'tomato',
]

const HighLighted = ({ value, debounceValue }) => {
  const highlight = val => {
    return val.replaceAll(debounceValue,
      `<span style="color: #0000FF; font-weight: bold;">${debounceValue}</span>`) 
  }
  return (
   <div onClick={() => alert(value)}
     className='AutoSuggest-listitem'
     dangerouslySetInnerHTML={{__html: highlight(value)}} />
  )
}

const AutoSuggest = () => {
  const [autoSuggest, setAutoSuggest] = useState('')
  const [values, setValues] = useState([])
  const debounceValue = useDebounce(autoSuggest, 500)

  useEffect(() => {
    if (debounceValue) {
      setValues(items.filter(it => it.includes(debounceValue.toLowerCase())))
    }
    else {
      setValues([])
    }
  }, [debounceValue])

  const handleChange = e => {
    setAutoSuggest(e.target.value)
  }

  return (
    <>
      <h2>AutoSuggest</h2>
      <div>
        <input
          style={{ width: '400px', fontSize: '20px' }}
          type='text' value={autoSuggest} onChange={handleChange} />
        {debounceValue && <span style={{ fontSize: '26px', marginLeft: '10px', cursor: 'pointer' }} onClick={() => setAutoSuggest('')}>X</span>}
      </div>
      {debounceValue && <div className='AutoSuggest-list'>
        {values.map(value =>
          <HighLighted key={value} value={value} debounceValue={debounceValue} />
        )}
      </div>}
    </>
  )
}

export default AutoSuggest