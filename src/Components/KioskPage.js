import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import VerticalTabs from "./GoodsPage";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks/5d372f320d2567534c1ba603';
export default class KioskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id:'',
            nameDessertFirst: '',
            nameDessertSecond: '',
            nameDessert: ['', '',],
            priceDessertFirst: '',
            priceDessertSecond: '',
            priceDessert: ['', ''],
            // currency:'',
            // addressRu:'',
            // addressEn:'',
            // hoursFrom:'',
            // hoursTo:'',
            // categoryTitle:'',
            // categoryId:'',
            // categoryOrder:'',
            // productsTitle:'',
            // productsId:'',
            // productsCount:'',
            // productsDescription:'',

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
            return response.json()
        }).then(data => {
            console.log(data);
            this.setState({
                nameDessertFirst: `${data.items[0].products[0].title}`,
                priceDessertFirst: `${data.items[0].products[0].price}`,
                nameDessertSecond: `${data.items[0].products[1].title}`,
                priceDessertSecond: `${data.items[0].products[1].price}`,
                nameDessert: [`${data.items[0].products[2].title}`, `${data.items[0].products[3].title}`],
                priceDessert: [`${data.items[0].products[2].price}`, `${data.items[0].products[3].price}`]
            });
            console.log(this.state.nameDessert[0]);
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const nameDessertFirst = this.state.nameDessertFirst;
        const nameDessertSecond = this.state.nameDessertSecond;
        const nameDessertThird = this.state.nameDessert[0];
        const nameDessertFourth = this.state.nameDessert[1];
        const priceDessertFirst = this.state.priceDessertFirst;
        const priceDessertSecond = this.state.priceDessertSecond;
        const priceDessertThird = this.state.priceDessert[0];
        const priceDessertFourth = this.state.priceDessert[1];

        return (
            <div className='container_'>
                <header>
                    <h1>Блюда</h1>
                </header>
                <VerticalTabs nameDessertFirst={nameDessertFirst}
                              nameDessertSecond={nameDessertSecond}
                              priceDessertFirst={priceDessertFirst}
                              priceDessertSecond={priceDessertSecond}
                              nameDessertThird={nameDessertThird}
                              priceDessertThird={priceDessertThird}
                              nameDessertFourth={nameDessertFourth}
                              priceDessertFourth={priceDessertFourth}/>
            </div>
        )
    }
}