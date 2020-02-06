import React from 'react'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import KioskPage from './Components/Kiosks/KioskPage'
import DashBoard from "./Components/Dashboard/DashBoard";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact render={()=>{
                        const log = localStorage.getItem('User');
                        return log ? <DashBoard /> : <Redirect to='/login' />;
                    }}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/kiosks/' component={KioskPage}/>
                </Switch>
            </div>
        )
    }
}
export default App
