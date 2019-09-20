import React,{Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CategoryIcon from '@material-ui/icons/Category';
import '../Dashboard/DashBoard.css'


export default class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
        render(){
            return (
                <div className='root'>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem className='selected'  style={{borderBottom:'1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem  className='selected' style={{borderBottom:'1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Kiosks" />
                        </ListItem>
                        <ListItem className='selected'  style={{borderBottom:'1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <FastfoodIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItem>
                        <ListItem className='selected'  style={{borderBottom:'1px solid #e5f0f2'}} button>
                            <ListItemIcon>
                                <CategoryIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Categories" />
                        </ListItem>
                    </List>
                </div>
            );
        }

}
