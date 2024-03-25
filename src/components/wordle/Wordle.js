import React, { useState, useEffect, useRef } from 'react'
import useLocalStorage from "use-local-storage";
import hasRepeatingChar from '../../utils/has_repeating_char';
import Timer from './Timer';
import Keyboard from './Keyboard';
import ResultsModal from './ResultsModal';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'


const words = ["ALBUM","HINGE","MONEY","SCRAP","GAMER","GLASS","SCOUR","BEING","DELVE","YIELD","METAL","TIPSY","SLUNG","FARCE","GECKO","SHINE","CANNY","MIDST","BADGE","HOMER","TRAIN","STORY","HAIRY","FORGO","LARVA","TRASH","ZESTY","SHOWN","HEIST","ASKEW","INERT","OLIVE","PLANT","OXIDE","CARGO","FOYER","FLAIR","AMPLE","CHEEK","SHAME","MINCE","CHUNK","ROYAL","SQUAD","BLACK","STAIR","SCARE","FORAY","COMMA","NATAL","SHAWL","FEWER","TROPE","SNOUT","LOWLY","STOVE","SHALL","FOUND","NYMPH","EPOXY","DEPOT","CHEST","PURGE","SLOSH","THEIR","RENEW","ALLOW","SAUTE","MOVIE","CATER","TEASE","SMELT","FOCUS","TODAY","WATCH","LAPSE","MONTH","SWEET","HOARD","CLOTH","BRINE","AHEAD","MOURN","NASTY","RUPEE","CHOKE","CHANT","SPILL","VIVID","BLOKE","TROVE","THORN","OTHER","TACIT","SWILL","DODGE","SHAKE","CAULK","AROMA","CYNIC","ROBIN","ULTRA","ULCER","PAUSE","HUMOR","FRAME","ELDER","SKILL","ALOFT","PLEAT","SHARD","MOIST","THOSE","LIGHT","WRUNG","COULD","PERKY","MOUNT","WHACK","SUGAR","KNOLL","CRIMP","WINCE","PRICK","ROBOT","POINT","PROXY","SHIRE","SOLAR","PANIC","TANGY","ABBEY","FAVOR","DRINK","QUERY","GORGE","CRANK","SLUMP","BANAL","TIGER","SIEGE","TRUSS","BOOST","REBUS","UNIFY","TROLL","TAPIR","ASIDE","FERRY","ACUTE","PICKY","WEARY","GRIPE","CRAZE","PLUCK","BRAKE","BATON","CHAMP","PEACH","USING","TRACE","VITAL","SONIC","MASSE","CONIC","VIRAL","RHINO","BREAK","TRIAD","EPOCH","USHER","EXULT","GRIME","CHEAT","SOLVE","BRING","PROVE","STORE","TILDE","CLOCK","WROTE","RETCH","PERCH","ROUGE","RADIO","SURER","FINER","VODKA","HERON","CHILL","GAUDY","PITHY","SMART","BADLY","ROGUE","GROUP","FIXER","GROIN","DUCHY","COAST","BLURT","PULPY","ALTAR","GREAT","BRIAR","CLICK","GOUGE","WORLD","ERODE","BOOZY","DOZEN","FLING","GROWL","ABYSS","STEED","ENEMA","JAUNT","COMET","TWEED","PILOT","DUTCH","BELCH","OUGHT","DOWRY","THUMB","HYPER","HATCH","ALONE","MOTOR","ABACK","GUILD","KEBAB","SPEND","FJORD","ESSAY","SPRAY","SPICY","AGATE","SALAD","BASIC","MOULT","CORNY","FORGE","CIVIC","ISLET","LABOR","GAMMA","LYING","AUDIT","ROUND","LOOPY","LUSTY","GOLEM","GONER","GREET","START","LAPEL","BIOME","PARRY","SHRUB","FRONT","WOOER","TOTEM","FLICK","DELTA","BLEED","ARGUE","SWIRL","ERROR","AGREE","OFFAL","FLUME","CRASS","PANEL","STOUT","BRIBE","DRAIN","YEARN","PRINT","SEEDY","IVORY","BELLY","STAND","FIRST","FORTH","BOOBY","FLESH","UNMET","LINEN","MAXIM","POUND","MIMIC","SPIKE","CLUCK","CRATE","DIGIT","REPAY","SOWER","CRAZY","ADOBE","OUTDO","TRAWL","WHELP","UNFED","PAPER","STAFF","CROAK","HELIX","FLOSS","PRIDE","BATTY","REACT","MARRY","ABASE","COLON","STOOL","CRUST","FRESH","DEATH","MAJOR","FEIGN","ABATE","BENCH","QUIET","GRADE","STINK","KARMA","MODEL","DWARF","HEATH","SERVE","NAVAL","EVADE","FOCAL","BLUSH","AWAKE","HUMPH","SISSY","REBUT","CIGAR"]
const WORD_SIZE = 5
const LINE_SIZE = 6

const initWordleBoard = () => {
  let wordleboard  = []
  for (let i = 0; i < LINE_SIZE; i++) {
    wordleboard.push(Array(WORD_SIZE).fill(''))
  }
  return wordleboard
}

let charClass = {}

function Wordle() {
  const word = useRef()
  const timerRef = useRef(0)
  const [results, setResults] = useLocalStorage('wordle', [])
  const [board, setBoard] = useState(initWordleBoard())
  const [currentLine, setCurrentLine] = useState(0)
  const [currentTile, setCurrentTile] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [success, setSuccess] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [mode, setMode] = useState('Hard')

  const getCurrentWord = () => {
    while(true) {
      const currword =  words[Math.floor(Math.random() * words.length)]
      if (mode === 'Hard') return currword
      if (hasRepeatingChar(currword)) continue
      return currword
    }
  }

  const play = () => {
    word.current = getCurrentWord()
    setBoard(initWordleBoard())
    setCurrentLine(0)
    setCurrentTile(0)
    setGameOver(false)
    setSuccess(false)
    setTimeElapsed(0)
    charClass = {}
    if (!results) setResults([])
  }

  useEffect(() => {
    if (!gameOver) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [gameOver])

  const setCharClass = (chr, classnm) => {
    charClass[chr] = classnm
  }

  const getTileClassName = (line, tile) => {
    let classNm = ' '

    if (board[line].filter(x => x !== '').length < WORD_SIZE) {
      return classNm;
    }
    const chr = board[line][tile]
    if (!chr) return classNm

    if (chr === word.current[tile]) {
      classNm = 'wordle-correct'
    }
    else if (word.current.includes(chr)) {
      classNm = 'wordle-close'
    }
    else {
      classNm = 'wordle-incorrect'
    }
    setCharClass(chr, classNm)
    return classNm
  }

  const doGameOver = (solved, guess, line) => {
    setGameOver(true)
    setSuccess(solved)
    setResults([...results, 
      { word: word.current, guess, time: timeElapsed, date: Date.now(),
        line: line + 1, success: solved }])
  }

  const handleCharClicked = chr => {
    if (gameOver) return

    const newBoard = [...board]
    if (chr === 'backspace' && currentTile > 0 && currentTile < WORD_SIZE) {
      newBoard[currentLine][currentTile - 1] = ''
      setCurrentTile(prev => prev - 1)
      setBoard(newBoard)
      return
    }
    
    if (currentTile === WORD_SIZE - 1) {
      setCurrentLine(prev => prev + 1)
      setCurrentTile(-1)
    }
  
    newBoard[currentLine][currentTile] = chr
    setBoard(newBoard)

    if (board[currentLine].join('') === word.current) {
      doGameOver(true, word.current, currentLine)
      return
    }

    setCurrentTile(prev => prev + 1)

    if (board[LINE_SIZE - 1][WORD_SIZE - 1]) {
      const guess = board[currentLine].join('')
      doGameOver(false, guess, currentLine)
    }
  }

  return (
    <>
      <Typography sx={{ mt: 3, mb: 1}} variant='h3'>Wordle</Typography>
      <Timer elapsedtime={timeElapsed} />
      {results && results.length && <ResultsModal results={results} />}
      <div style={{ marginLeft: '8px', fontSize: '16px' }}>Mode: {mode}
          <Button
            disabled={!gameOver}
            onClick={() => setMode(mode === 'Hard' ? 'Easy' : 'Hard')}>
            Toggle Mode
          </Button>
      </div>
      <div className='wordle-container'>
        {board.map((line, idx) => 
          <div className='wordle-lines' key={idx}>
            {line.map((tile, i) => 
              <p className={`wordle-tile ${getTileClassName(idx, i)}`} key={i} >
                {tile}
              </p>
            )}
          </div>)}
      </div>
      {gameOver ? 
        <div 
          className='wordle-gameover'>
            {success ? `Congrats, ${word.current} is correct!` : 
            word.current ? `Sorry you are wrong, word is ${word.current}` : ''}
          <div><button style={{ fontSize: '20px',marginLeft: '4px', marginTop: '10px' }} 
            onClick={() => play()}>Start Game</button>
          </div>
        </div> : 
        <div 
          style={{ backgroundColor: 'aliceblue', width: '300px', fontSize: '16px', border: '1px solid black', borderRadius: '5px', marginTop: '5px', padding: '5px'}}>
          Game has started, use keypad below to select letters. Good Luck!<br/>
          NOTE: Once you select the last letter on a line your guess will be auto submitted.
        </div>}
      <Keyboard
        charClass={charClass}
        backspaceDisabled={currentTile === 0 ? true : false}
        handleClick={handleCharClicked}/>
    </>
  )
}

export default Wordle