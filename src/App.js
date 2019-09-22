import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import {Route, Switch} from 'react-router-dom'
import KioskPage from './Components/KioskPage'
import DashBoard from "./Components/Dashboard/DashBoard";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={DashBoard}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/kiosks/' component={KioskPage}/>
                </Switch>
            </div>
        )
    }
}

export default App
