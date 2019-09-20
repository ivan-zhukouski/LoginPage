import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import Dashboard from './Components/Dashboard.js'
import {Route, Switch} from 'react-router-dom'
import KioskPage from './Components/KioskPage';
import MainMenu from './Components/MainMenu/MainMenu'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={MainMenu}/>
                    <Route path='/login'  component={LoginPage}/>
                    <Route path='/kiosks/' component={KioskPage} />
                </Switch>
            </div>
        )
    }
}

export default App
