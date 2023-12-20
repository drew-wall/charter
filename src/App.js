import React from 'react'
import Joke from './components/joke'
import MySimpleComponent from './components/mysimplecomponent'
import Counter from './components/ counter'
import Myinput from './components/myinput'
import DogImages from './components/DogImages'
import Expresstest from './components/Expresstest'
import CountryCapitalGame from './components/CountryCapitalGame'
import Users from './components/users'
import TextAnalyzer from './components/TextAnalyzer'
import Weather from './components/Weather'
import Increment from './components/Increment'
import Count from './components/Count'
import { Typography } from '@mui/material'
import TestComponent from './components/TestComponent'
import Usereftest from './components/Usereftest'
import Stopwatch from './components/Stopwatch'
import Paginate from './components/Paginate'

function App() {
  console.log('APP rendered')
  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>My React/Redux/Redux-Saga/MUI Sandbox</Typography> 
      <Weather/>
      <Joke/>
      <MySimpleComponent/>
      <Counter/>
      <Myinput/>
      <DogImages/>
      <Expresstest/>
      <CountryCapitalGame/>
      <Users/>
      <TextAnalyzer/>
      <Increment/>
      <Count/>
      <TestComponent/>
      <Usereftest/>
      <Stopwatch/>
      <Paginate/>
    </>
  )
}

export default App
