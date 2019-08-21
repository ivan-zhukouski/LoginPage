import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage'
import UserPage from './Components/UserPage'
import {Route, Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
        <div>
            <Switch>
                <Route path='/' exact component={LoginPage}/>
                <Route path='' exact component={UserPage}/>
            </Switch>
        </div>
    )
  }
}
export default App
