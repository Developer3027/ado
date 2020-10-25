import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard () {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogOut () {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h2>Profile</h2>
            {error && <alert>{error}</alert>}
            <strong>Email:</strong>
            {currentUser.email}
            <div>
              <Link to='update-profile'>Update Profile</Link>
            </div>
            <div className='small-text'>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
