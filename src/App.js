import React from 'react'
import './styles.css'
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
import AsyncTest from './components/AsyncTest'
import Points from './components/Points'
import Checkout from './components/Checkout'
import Synonyms from './components/Synonyms'
import RandomColor from './components/RandomColor'
import MemoryGame from './components/MemoryGame'
import Quiz from './components/Quiz'
import StopLight from './components/StopLight'
import Rating from './components/Rating'
import TicTacToe from './components/TicTacToe'
import TabPanels from './components/TabPanels'
import SwapOdds from './components/SwapOdds'
import TransferList from './components/TransferList'
import RandomUsers from './components/RandomUsers'
import TestTs from './components/TestTs.tsx'
import CustomUserHook from './components/CustomUserHook'
import Cellinputs from './components/Cellinputs'
import Products from './components/products/Products'

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
      <AsyncTest/>
      <Points/>
      <Checkout/>
      <Synonyms/>
      <RandomColor/>
      <MemoryGame/>
      <Quiz/>
      <StopLight/>
      <Rating/>
      <TicTacToe size={3}/>
      <TabPanels/>
      <SwapOdds/>
      <TransferList numItems={6}/>
      <RandomUsers/>
      <TestTs/>
      <CustomUserHook/>
      <Cellinputs/>
      <Products />
    </>
  )
}

export default App
