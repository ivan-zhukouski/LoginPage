import React, {Component} from 'react'
import '../dashboard.css'
import {Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {NavLink} from "react-router-dom";

const getKiosk = JSON.parse(localStorage.getItem('Kiosks'));
const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            addressRu:'',
            addressEn:'',
            currency:'',
            title:'',
            hoursFrom:'',
            hoursTo:'',
            loc:'',
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
            this.setState({addressRu:`${getKiosk[0].address.ru}`,
                                addressEn:`${getKiosk[0].address.en}`,
                                title:`${getKiosk[0].title}`,
                                hoursFrom:`${getKiosk[0].hours.from}`,
                                hoursTo:`${getKiosk[0].hours.to}`,
                                currency:`${getKiosk[0].currency}`});
            console.log(this.state.addressRu);
            return response.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem('Kiosks', JSON.stringify(data))
        }).catch(error => {
            console.log(error);
        });
        console.log(getKiosk);
    }
    render() {
        return (
            <div className='container'>
                <header>
                    <h1>Fastbuy.by</h1>
                </header>
                <div className='kiosk_cards'>
                    <div className='card'>
                        <NavLink to={{
                            pathname: '/kiosks/kiosk'
                        }}>
                            <Card>
                                <Image
                                    src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                    wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>{this.state.title}</Card.Header>
                                    <Card.Description>Адрес:{this.state.addressRu} ({this.state.addressEn})
                                        <br/> Время работы: {this.state.hoursFrom} - {this.state.hoursTo}<br/>Валюта: {this.state.currency}</Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}