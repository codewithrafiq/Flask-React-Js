import {Route,Switch,BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import  Login  from './pages/Login'
import  Register  from './pages/Register'
import Navbar from './pages/Navbar'
import EditTodo from './pages/EditTodo'


const Routes = () => {

  return (

    <BrowserRouter>
    <Navbar />
      <Switch>
        {
          localStorage.getItem('token') ?
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo-:todotitle-:todoid" component={EditTodo} />
          </>
          :
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </>
        }
      </Switch>
    </BrowserRouter>

  )
}

export default Routes
