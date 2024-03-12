import React from 'react'
import { useTodo } from './todosContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useTodo()
  return (
    <>
      {todos.length > 0 ?
        todos.map(todo => 
          <TodoItem key={todo.id} todo={todo} />
        )
        : null
      }
    </>
  )
}

export default TodoList