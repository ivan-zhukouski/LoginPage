import React, {Component} from 'react'
import Header from './Header'
import MediaCard from '../Dashboard/DashBoardKards.js'
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
        const handleLogout = this.handleLogout;
        return (
            <div>
                <Header handleLogout={handleLogout} />
            </div>
        )
    }
}