import React, {Component} from 'react'
import '../dashboard.css'
import {Card, Image, Button,Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {NavLink} from "react-router-dom";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks';
export default class Dashboard extends Component {
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
            id:'',
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
                id:`${data[0].id}`,
            });
            console.log(this.state.id);
        }).catch(error => {
            console.log(error);
        });
    }
    handleLogout = ()=>{
        localStorage.removeItem('User');
        this.props.history.push({pathname: '/login'});
    };
    render() {
        return (
            <div className='container_'>
                <header>
                    <h1>Fastbuy.by</h1>
                    <Button floated='right' icon labelPosition='left' onClick={this.handleLogout}>
                        <Icon name='sign-out' />
                       Logout</Button>
                </header>
                <div className='kiosk_cards'>
                    <div className='card'>
                        <NavLink to={{
                            pathname: '/kiosks/' + this.state.id,
                        }} >
                            <Card>
                                <Image
                                    src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                    wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>{this.state.title}</Card.Header>
                                    <Card.Description>Адрес:{this.state.addressRu} ({this.state.addressEn})
                                        <br/> Время
                                        работы: {this.state.hoursFrom} - {this.state.hoursTo}<br/>Валюта: {this.state.currency}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}