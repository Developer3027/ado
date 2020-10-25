import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h2>Log In</h2>
            {error && <alert>{error}</alert>}
            <form className='form' onSubmit={handleSubmit}>
              <label for='label'>Email</label>
              <input type='email' ref={emailRef} required />

              <label for='password'>Password</label>
              <input type='password' ref={passwordRef} required />

              <button disabled={loading} type='submit'>
                Log In
              </button>
            </form>
            <div className='small-text'>
              Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
