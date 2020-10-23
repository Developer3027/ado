import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Those passwords don't match")
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
      <div className='card'>
        <div className='card-body'>
          {error && <alert>{error}</alert>}
          <form onSubmit={handleSubmit}>
            <label for='label'>Email</label>
            <input type='email' ref={emailRef} required />

            <label for='password'>Password</label>
            <input type='password' ref={passwordRef} required />

            <label for='password-confirm'>Confirm Password</label>
            <input type='password' ref={confirmPasswordRef} required />

            <button disabled={loading} type='submit'>
              Sign Up
            </button>
          </form>
          <div className='signin-text'>Already have an account? Sign In</div>
        </div>
      </div>
    </>
  )
}

export default SignUp
