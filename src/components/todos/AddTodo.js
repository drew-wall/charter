import React, { useState } from 'react'
import { useTodo } from './todosContext'


function AddTodo() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()

  const add = () => {
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo('')
  }

  return (
    <div>
       <input style={{ fontSize: '20px', width: '400px', marginRight: '6px' }} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
       <button onClick={add}>Add</button>
    </div>
  )
}

export default AddTodo