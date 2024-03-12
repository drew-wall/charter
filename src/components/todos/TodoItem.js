import React from 'react'
import { useTodo } from './todosContext'
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';

function TodoItem(props) {
  const { id, todo, completed } = props?.todo || {}
  const { deleteTodo, toggleComplete } = useTodo()

  return (
    <div className="todoItem">{todo}  completed: {''+completed} 
      <ClearSharpIcon onClick={() => deleteTodo(id)} />
      <CheckBoxOutlineBlankSharpIcon onClick={() => toggleComplete(id)} />
    </div>
  )
}

export default TodoItem