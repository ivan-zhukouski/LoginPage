import React, {Component} from 'react'
import '../dashboard.css'
import {Card, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {NavLink} from "react-router-dom";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks';
export default class Dashboard extends Component {
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
        }).catch(error => {
            console.log(error);
        });
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
                                    <Card.Header>Demo</Card.Header>
                                    <Card.Description>Адрес: проспект Победителей 84, Минск (praspiekt Pieramožcaŭ 84,
                                        Minsk)<br/> Время работы: 9:00 - 24:00 без выходных </Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to={{
                            pathname: '/kiosks/kiosk'
                        }}>
                            <Card>
                                <Image
                                    src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                    wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>Demo 2</Card.Header>
                                    <Card.Description>Адрес: проспект Победителей 84, Минск (praspiekt Pieramožcaŭ 84,
                                        Minsk)<br/> Время работы: 9:00 - 24:00 без выходных </Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to={{
                            pathname: '/kiosks/kiosk'
                        }}>
                            <Card>
                                <Image
                                    src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                    wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>Demo 3</Card.Header>
                                    <Card.Description>Адрес: проспект Победителей 84, Минск (praspiekt Pieramožcaŭ 84,
                                        Minsk)<br/> Время работы: 9:00 - 24:00 без выходных </Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                    <div className='card'>
                        <NavLink to={{
                            pathname: '/kiosks/kiosk'
                        }}>
                            <Card>
                                <Image
                                    src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                    wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>Demo 4</Card.Header>
                                    <Card.Description>Адрес: проспект Победителей 84, Минск (praspiekt Pieramožcaŭ 84,
                                        Minsk)<br/> Время работы: 9:00 - 24:00 без выходных </Card.Description>
                                </Card.Content>
                            </Card>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}