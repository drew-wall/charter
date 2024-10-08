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
import ProgressBar from './components/ProgressBar'
import JobBoard from './components/jobboard/JobBoard'
import CounterHook from './components/CounterHook'
import TodosApp from './components/todos/TodosApp'
import Lazyload from './components/Lazyload'
import Wordle from './components/wordle/Wordle'
import Names from './components/Names'
import Calls from './components/Calls'
import Formexample from './components/Formexample.js'
import Countries from './components/Countries'
import DelayText from './components/DelayText'
import Travel from './components/Travel'
import Login from './components/Login'
import Passcode from './components/Passcode'
import MulltiSelectStates from './components/multiselectstates/MulltiSelectStates'
import OtpLogin from './components/OtpLogin'
import AutoSuggest from './components/AutoSuggest'
import Tree from './components/Tree'
import WackAMole from './components/WackAMole'
import ClickBoxes from './components/ClickBoxes'
import SelectableGrid from './components/SelectableGrid'
import SwapListItems from './components/SwapListItems'
import PostsById from './components/PostsById'
import PhoneNumberInput from './components/PhoneNumberInput'
import MastersPlayers from './components/MastersPlayers.tsx'



function App() {
  console.log('APP rendered')
  return (
    <>
      
      <Typography variant="h3" sx={{ mb: 2 }}>My React/Redux/Redux-Saga/MUI Sandbox</Typography> 
      <MastersPlayers />
      <PhoneNumberInput />     
      <PostsById />
      <SwapListItems />
      <SelectableGrid />
      <ClickBoxes />
      <WackAMole />
      <Tree />     
      <AutoSuggest /> 
      <OtpLogin />
      <MulltiSelectStates />
      <Passcode />
      <Login />
      <Travel />
      <DelayText />
      {/* <Countries /> */}
      <Formexample />
      <Calls />
      <Names />
      <Wordle />
      <Lazyload/>
      <CounterHook/>
      <TodosApp />
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
      <ProgressBar />
      {/* <JobBoard /> */}
    </>
  )
}

export default App
