import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage'
import {Route, Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
        <div>
            <Switch>
                <Route path='/' exact component={LoginPage}/>
            </Switch>
        </div>
    )
  }
}
export default App
