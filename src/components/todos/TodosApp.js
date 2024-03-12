import React, { useState, useEffect } from 'react'
import { TodoProvider } from './todosContext'
import { Typography } from '@mui/material'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function TodosApp() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

  const addTodo = todo => {
    if (!todo) return
    setTodos(prev => 
      prev = [{ id: Date.now(), ...todo }, ...prev]
    )
  }

  const updateTodo = (id, todo) => {

  }

  const deleteTodo = id => {
    setTodos(prev =>
      prev.filter(p => p.id !== id) 
    )
  }

  const toggleComplete = id => {
    setTodos(prev =>
      prev.map(p => p.id === id ? {...p, completed: !p.completed} : p) 
    )
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <Typography sx={{ mt:3, mb: 1 }} variant='h3'>Todos</Typography>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  )
}

export default TodosApp
