import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'


const getBoard = size => {
  const newboard = []
  for (let i = 0; i < size; i++) {
    newboard.push([...Array(size).fill('')])
  }
  return newboard
}

function TicTacToe({size = 3}) {
  const [board, setBoard] = useState(getBoard(size))
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState('')
  const [ties, setTies] = useState(false)
  
  const checkForWinner = array => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].every(x => x === 'X')) return true
      if (array[i].every(x => x === 'O')) return true
    }
  }

  const checkRow = () => {
   return checkForWinner(board)
  }

  const checkCol = () => {
    let res = []
    for (let i = 0; i < board.length; i++) {
      let arr = []
      for (let j = 0; j < board[i].length; j++) {
         arr.push(board[j][i])
      }
      res.push(arr)
    }
    return checkForWinner(res)
  }

  const checkDiagonal = () => {
    //Only two diags starting with [0, 0] or [0[size - 1]]
    let res = []
    let arr = []
    for (let i = 0; i < board.length; i++) {
      arr.push(board[i][i])
    }
    res.push(arr)

    arr = []
    for (let i = board.length - 1; i >= 0; i--) {
      arr.push(board[board.length - (i+1)][i])
    }
    res.push(arr)

   return checkForWinner(res)
  }

  const checkTies = () => {
    if (board.flat().every(x => x !== '')) {
      return true
    }
  }

  const handleClick = (row, col) => {
    if (winner || !!board[row][col]) return
    const newBoard = [...board]
    newBoard[row][col] = player
    setBoard(newBoard)

    if (checkCol() || checkRow() || checkDiagonal()) {
      setWinner(player)
    }
    else if (checkTies()) {
      setTies(true)
    }
    else {
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  const rePlay = () => {
    setBoard(getBoard(size))
    setPlayer('X')
    setWinner('')
    setTies(false)
  }

  return (
    <>
      <Typography variant='h3' sx={{ mt: 3, mb: 1}}>TicTacToe</Typography>
      {winner && <Typography variant='h4'>{player} Wins!</Typography>}
      {ties && <Typography variant='h4'>Tied!</Typography>}
      {board.map((row, r) => {
        return (
          <div key={r} style={{ display: 'flex' }}>
          {row.map((col, c) => {
            return (
              <div key={c}
                onClick={() => handleClick(r, c)}
                style={{ 
                    border: 'solid black 2px',
                    cursor: !board[r][c] ? 'pointer' : 'default',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center' }}>
                {col}
              </div>
            )
          })}
          </div>
        )
      })}
      <Button disabled={!(winner || ties)} onClick={() => rePlay()}>Play Again</Button>
    </>
  )
}

export default TicTacToe