import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {NavLink} from "react-router-dom";
import './NavBar.css'
import MenuButton from './MenuButton'

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks';
export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressRu: '',
            addressEn: '',
            currency: '',
            title: '',
            hoursFrom: '',
            hoursTo: '',
            loc: '',
            id: '',
        }
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                addressRu: `${data[0].address.ru}`,
                addressEn: `${data[0].address.en}`,
                title: `${data[0].title}`,
                hoursFrom: `${data[0].hours.from}`,
                hoursTo: `${data[0].hours.to}`,
                currency: `${data[0].currency}`,
                id: `${data[0].id}`,
            });
            console.log(this.state.id);
        }).catch(error => {
            console.log(error);
        });
    }
    handleLogout = () => {
        localStorage.removeItem('User');
    };

    render() {
        return (
            <div>
                <div style={{flexGrow: '1'}}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className='menuDisplayNone'>
                                <MenuButton/>
                            </div>
                            <Typography variant="h6" style={{flexGrow: '1'}}>
                                Admin
                            </Typography>
                            <div className='marginPerson' style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <AccountCircle/>
                                <p className='personMargin'>Person</p>
                            </div>
                            <NavLink to={{
                                pathname: '/login'
                            }}>
                                <Button style={{color: 'white'}} color="inherit"
                                        onClick={this.handleLogout}>Logout</Button>
                            </NavLink>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}
