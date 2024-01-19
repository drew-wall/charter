import React, { useState } from 'react'
import { Typography, Button, Input } from '@mui/material'

const questions = [
    { prompt: 'What color is the sky?',
      correctAnswer: 'blue',
      answers: ['green', 'blue', 'yellow', 'black']
    },
    { prompt: 'Most popular programming Language?',
      correctAnswer: 'python',
      answers: ['C#', 'javascript', 'python', 'C++']
    },
    { prompt: 'Most common autombile color?',
      correctAnswer: 'white',
      answers: ['white', 'black', 'silver', 'blue']
    },
]

function Quiz() {
  const [answer, setAnswer] = useState('')
  const [currQuestion, setCurrQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const question = questions[currQuestion]

  const handleClick = () => {
    console.log(question.correctAnswer, answer)
    if (question.correctAnswer === answer) {
      console.log('Correct!')
      setScore(p => p + 1)
    }
    if (currQuestion < questions.length - 1) {
      setCurrQuestion(p => p + 1)
    }
  }

  return (
    <>
      <Typography variant='h3' sx={{ mt: 3, mb: 1 }}>Quiz</Typography>
      <Typography variant='h4' sx={{ mt: 3, mb: 1 }}>Score: {score} correct out of {questions.length}</Typography>
      <Typography variant='h5'>{question.prompt}</Typography>
      {questions[currQuestion].answers.map(a =>
       <div key={a}><label><Input name='answer' type='radio' checked={a === answer}
         onChange={() => setAnswer(a)} />{a}
       </label></div>
      )}
      <div><Button sx={{ mt: 2 }} onClick={handleClick} variant='contained'>Submit</Button></div>
    </>
  )
}

export default Quiz