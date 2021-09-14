import {Route,Switch,BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import  Login  from './pages/Login'
import  Register  from './pages/Register'


const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
