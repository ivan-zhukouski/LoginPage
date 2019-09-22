import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './DashBoard.css'
import {NavLink} from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import NavigationBar from "../MainMenu/NavigationBar";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks';
export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressRu: '',
            addressEn: '',
            title: '',
            id: '',
            displayNone: false,
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
                id: `${data[0].id}`,
            });
            console.log(this.state.id);
        }).catch(error => {
            console.log(error);
        });
    }

    displayNoneClick = () => {
        this.setState({displayNone: true})
    };

    render() {
        return (
            <div>
                <MainMenu/>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <NavigationBar/>
                    <div className={this.state.displayNone ? 'displayNone' : 'displayBlock'}>
                        <h3 style={{textAlign: 'center', marginTop: '15px'}}>Kiosks</h3>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <div style={{display: 'flex', justifyContent: 'flex-start',}}>
                                <div>
                                    <NavLink to={{
                                        pathname: '/kiosks/' + this.state.id,
                                    }}>
                                        <Card onClick={this.displayNoneClick}
                                              className='card'>
                                            <CardActionArea>
                                                <CardMedia
                                                    className='media'
                                                    image="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom
                                                                variant="h5"
                                                                component="h2">
                                                        Kiosk {this.state.title} on {this.state.addressEn}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to={{
                                        pathname: '/kiosks/' + this.state.id,
                                    }}>
                                        <Card onClick={this.displayNoneClick}
                                              className='card'>
                                            <CardActionArea>
                                                <CardMedia
                                                    className='media'
                                                    image="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom
                                                                variant="h5"
                                                                component="h2">
                                                        Kiosk {this.state.title} on {this.state.addressEn}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}