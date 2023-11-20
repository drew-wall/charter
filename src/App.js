import React from 'react'
import Joke from './components/joke'
import MySimpleComponent from './components/mysimplecomponent'
import Counter from './components/ counter'
import Myinput from './components/myinput'
import Hello from './components/hello'
import Expresstest from './components/Expresstest'
import CountryCapitalGame from './components/CountryCapitalGame'
import Users from './components/users'

function App() {
  console.log('APP rendered')
  return (
    <>
      <h1>My React/Redux/Redux-Saga/MUI Sandbox</h1> 
      <Joke/>
      <MySimpleComponent/>
      <Counter/>
      <Myinput/>
      <Hello/>
      <Expresstest/>
      <CountryCapitalGame/>
      <Users/>
    </>
  )
}

export default App
