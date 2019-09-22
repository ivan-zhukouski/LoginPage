import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CategoryIcon from '@material-ui/icons/Category';
import {NavLink} from "react-router-dom";
import './NavBar.css'

export default class NavigationBar extends Component {
    render() {
        return (
            <div style={{
                height: '100vh',
                width: '100%',
                maxWidth: '200px',
                borderRight: '1px solid #e5f0f2'
            }}>
                <List component="nav" aria-label="main mailbox folders">
                    <NavLink exact
                             activeStyle={{color: 'red'}}
                             to={{
                                 pathname: '/'
                             }}

                    >
                        <ListItem style={{borderBottom: '1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItem>
                    </NavLink>
                    <NavLink
                             activeStyle={{color: 'red'}} to={{
                        pathname: '/kiosks/'
                    }}>
                        <ListItem style={{borderBottom: '1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <StoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Kiosks"/>
                        </ListItem>
                    </NavLink>
                    <div >
                        <ListItem style={{borderBottom: '1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <FastfoodIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Products"/>
                        </ListItem>
                    </div>
                    <div>
                        <ListItem style={{borderBottom: '1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <CategoryIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Categories"/>
                        </ListItem>
                    </div>

                </List>
            </div>
        );
    }

}
