import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import {Route, Switch, Redirect} from 'react-router-dom'
import KioskPage from './Components/Kiosks/KioskPage'
import DashBoard from "./Components/Dashboard/DashBoard";

const log = localStorage.getItem("User");
class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact>{log===null ? <Redirect to='/login' /> : <DashBoard /> } </Route>
                    <Route path='/login' exact component={LoginPage}/>
                    <Route path='/kiosks/' component={KioskPage}/>
                </Switch>
            </div>
        )
    }
}
export default App
