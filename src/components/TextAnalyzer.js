import React, { useState, useMemo, useCallback } from 'react'
import { Button, Typography } from '@mui/material'

const TextAnalyzer = () => {
  const [text, setText] = useState('')
  const [numWords, setNumWords] = useState(0)
  const [longestWord, setLongestWord] = useState(0)
  const [sentences, setSentences] = useState(0)
  const [lines, setLines] = useState(0)
  const [paragraphs, setParagraphs] = useState(0)
  const [count, setCount] = useState(0);
 

  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);

  const handleChange = (e) => {
    setText(() => e.target.value)
    const words = text.trim().replace(/\n/g, ' ').split(' ').filter(w => w)
    setNumWords(words.length)
    const longestword = words.reduce((acc, val) => {
      if (val.length > acc.length) acc = val
      return acc
    }, '')
    setLongestWord(longestword)
    let sentences = 0, lines = 0
    for (const c of text) {
      if (c === '.') sentences += 1
      if (c === '\n') lines += 1
    }
    setLines(lines)
    setSentences(sentences)
    setParagraphs((text.match(/\n\n\S+/g) || []).length)
  }

  return (
    <>
      <Typography variant='h4'>Text Analyzer</Typography>
      <textarea name="textanalyzer" value={text} onChange={handleChange} rows="10" cols="80"></textarea>
      <div>
        <span>Chars:{text.length}, </span>
        <span>Words:{numWords}, </span>
        <span>Longest Word:{longestWord}, </span>
        <span>Sentences:{sentences}, </span>
        <span>Lines:{lines} </span>
        <span>Paragraphs:{paragraphs} </span>
      </div>
      <Button
         variant="contained"
         sx={{ ml: 2, mt: 1 }}
         onClick={() => setText('')}
         disabled={!text}>
         Clear
      </Button>
    </>
  )
}

export default TextAnalyzer