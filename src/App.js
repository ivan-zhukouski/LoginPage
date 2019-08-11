import React from 'react'
import './App.css'
import Form from './Components/MainForm'
import {Route, Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
        <div>
            <Switch>
                <Route path='/' exact component={Form}/>
            </Switch>
        </div>
    )
  }
}
export default App
