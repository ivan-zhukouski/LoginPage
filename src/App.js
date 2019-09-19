import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import UserPage from './Components/UserPage'
import Dashboard from './Components/Dashboard.js'
import {Route, Switch} from 'react-router-dom'
import KioskPage from './Components/KioskPage';
import TextFields from './Components/LoginPage/NewLoginPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/login'  component={TextFields}/>
                    <Route path='/v1/users/profile' exact component={UserPage}/>
                    <Route path='/kiosks/' component={KioskPage} />
                </Switch>
            </div>
        )
    }
}

export default App
