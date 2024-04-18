import React, { useState } from 'react'

const Formexample = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(fname && lname && email)) {
      alert('All fields are required')
    }
    else {
      alert('Data submitted')
    }
  }

  return (
    <>
      <h3>Form Example</h3>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
        </label>
        <label>
          <br />
          Email:
          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  )


}

export default Formexample