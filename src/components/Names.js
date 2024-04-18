import React, { useState, memo, useCallback } from 'react'

const NamesList = memo(({ names, onDelete}) => {

  return (
    <>
     <ul>
      {names.map(({ id, first, last }) => {
        return (
         <li key={id}>
          <span>{first} </span>
          <span>{last} </span>
          <span style={{ color: 'red' }} onClick={() => onDelete(id)}>X</span>
         </li>
        )
      })}
     </ul>
    </>
  )
})

const Names = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [names, setNames] = useState([])
  const [error, setError] = useState('')

  const setName = e => {
    if (e.target.name === 'firstname') {
      setFirstName(e.target.value)
    }
    else {
      setLastName(e.target.value)
    }
  }

  const doSubmit = () => {
    if (names.find(x => x.first === firstName && x.last === lastName)) {
      setError('Duplicate names not allowed')
      return
    }
    setError('')
    setNames([...names, { id: Date.now(), first: firstName, last: lastName }])
  }

  const doCancel = () => {
    setFirstName('')
    setLastName('')
    setError('')
  }

  const onDelete = useCallback((id) => {
    setNames(n => n.filter(x => x.id !== id))
  },[])

  return (
    <>
      <h3>Names List</h3>
      <div>First Name:</div>
      <input type='text' name='firstname' value={firstName} onChange={setName}/>
      <div>Last Name:</div>
      <input type='text' name='lastname' value={lastName} onChange={setName}/>
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button disabled={!(firstName && lastName)} onClick={() => doSubmit()}>Submit</button>
        <button onClick={() => doCancel()}>Cancel</button>
      </div>
      <NamesList names={names} onDelete={onDelete} />
    </>
  )

}

export default Names
