import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
