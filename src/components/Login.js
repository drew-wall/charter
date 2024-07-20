import React, { useState } from 'react'

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || password !== 'password123') {
        reject('Login failed')
      }
      else {
        resolve('Login Success')
      }
    }, 1000)
  })
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const loginDisabled = !email || password.length < 6 || loading

  const doLogin = async () => {
    setLoading(true)
    setError('')
    try {
      await login(email, password)
      alert('Login Successful')
    }
    catch (e) {
      setError('Login Failed')
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h3>Login</h3>
      <label style={{ paddingRight: '5px'}}>
        Email: 
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password: 
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <div style={{ color: 'red' }}>{error}</div>
      <button disabled={loginDisabled} onClick={doLogin}>Login</button>
    </>
  )
}

export default Login