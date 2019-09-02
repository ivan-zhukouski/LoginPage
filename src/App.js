import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage'
import UserPage from './Components/UserPage'
import Dashboard from './Components/Dashboard.js'
import {Route, Switch} from 'react-router-dom'
import KioskPage from "./Components/KioskPage";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={LoginPage}/>
                    <Route path='/v1/users/profile' exact component={UserPage}/>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/kiosks/' component={KioskPage} />
                </Switch>
            </div>
        )
    }
}

export default App
