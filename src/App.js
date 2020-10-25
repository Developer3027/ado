import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import { AuthProvider } from './contexts/AuthContext'
import SignUp from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
