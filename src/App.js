import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage'
import {Route, NavLink, Switch} from 'react-router-dom'
import ErrorSubmit from './Components/ErrorSubmit.js'
import ErrorTyping from './Components/ErrorTyping.js'
class App extends React.Component{
  render(){
    return(
        <div>
                <NavLink className={'dnone'} to={{
                    pathname: '/'
                }} exact>Login
                </NavLink>
                <NavLink className={'dnone'} to={{
                    pathname: '/error'
                }} exact>Error
                </NavLink>
                <NavLink  to={{
                    pathname: '/errortyping'
                }} exact>Error
                </NavLink>
            <Switch>
                <Route path='/' exact component={LoginPage}/>
                <Route path='/error' component={ErrorSubmit}/>
                <Route path='/errortyping' component={ErrorTyping}/>
            </Switch>
        </div>
    )
  }
}
export default App
