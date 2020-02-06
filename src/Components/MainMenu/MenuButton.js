import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CategoryIcon from '@material-ui/icons/Category';
import './NavBar.css'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
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
                    <div>
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
            </StyledMenu>
        </div>
    );
}
