import React from 'react'
import Joke from './components/joke'
import MySimpleComponent from './components/mysimplecomponent'
import Counter from './components/ counter'
import Myinput from './components/myinput'
import DogImages from './components/DogImages'
import Expresstest from './components/Expresstest'
import CountryCapitalGame from './components/CountryCapitalGame'
import Users from './components/users'
import { Typography } from '@mui/material'

function App() {
  console.log('APP rendered')
  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>My React/Redux/Redux-Saga/MUI Sandbox</Typography> 
      <Joke/>
      <MySimpleComponent/>
      <Counter/>
      <Myinput/>
      <DogImages/>
      <Expresstest/>
      <CountryCapitalGame/>
      <Users/>
    </>
  )
}

export default App
