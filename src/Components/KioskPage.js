import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import VerticalTabs from "./GoodsPage";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks/5d372f320d2567534c1ba603';
export default class KioskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id:'',
            nameDessertFirst: '', //как лучше?, подробно описывать стейт или через массив
            nameDessertSecond: '',
            nameDessert: ['', '',],
            priceDessertFirst: '',
            priceDessertSecond: '',
            priceDessert: ['', ''],
            nameBeverage: ['', '', '', ''],
            priceBeverage: ['', '', '', ''],
            volumeBeverage: ['', '', '', ''],
            nameSmoothie: ['', '', ''],
            priceSmoothie: ['', '', ''],
            volumeSmoothie: ['', '', ''],
            nameSandwich: ['', '', '', ''],
            priceSandwich: ['', '', '', ''],
            descriptionSandwich: ['', '', '', ''],
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
                priceDessert: [`${data.items[0].products[2].price}`, `${data.items[0].products[3].price}`],
                nameBeverage: [`${data.items[1].products[0].title}`, `${data.items[1].products[1].title}`, `${data.items[1].products[2].title}`, `${data.items[1].products[3].title}`],
                volumeBeverage: [`${data.items[1].products[0].description}`, `${data.items[1].products[1].description}`, `${data.items[1].products[2].description}`, `${data.items[1].products[3].description}`],
                priceBeverage: [`${data.items[1].products[0].price}`, `${data.items[1].products[1].price}`, `${data.items[1].products[2].price}`, `${data.items[1].products[3].price}`],
                nameSmoothie: [`${data.items[2].products[0].title}`, `${data.items[2].products[1].title}`, `${data.items[2].products[2].title}`,],
                priceSmoothie: [`${data.items[2].products[0].price}`, `${data.items[2].products[1].price}`, `${data.items[2].products[2].price}`,],
                volumeSmoothie: [`${data.items[2].products[0].description}`, `${data.items[2].products[1].description}`, `${data.items[2].products[2].description}`,],
                nameSandwich: [`${data.items[3].products[0].title}`, `${data.items[3].products[1].title}`, `${data.items[3].products[2].title}`, `${data.items[3].products[3].title}`,],
                priceSandwich: [`${data.items[3].products[0].price}`, `${data.items[3].products[1].price}`, `${data.items[3].products[2].price}`, `${data.items[3].products[3].price}`,],
                descriptionSandwich: [`${data.items[3].products[0].description}`, '', '', ''],
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
        const nameBeverageFirst = this.state.nameBeverage[0];
        const nameBeverageSecond = this.state.nameBeverage[1];
        const nameBeverageThird = this.state.nameBeverage[2];
        const nameBeverageFourth = this.state.nameBeverage[3];
        const volumeFirst = this.state.volumeBeverage[0];
        const volumeSecond = this.state.volumeBeverage[1];
        const volumeThird = this.state.volumeBeverage[2];
        const volumeFourth = this.state.volumeBeverage[3];
        const priceBeverageFirst = this.state.priceBeverage[0];
        const priceBeverageSecond = this.state.priceBeverage[1];
        const priceBeverageThird = this.state.priceBeverage[2];
        const priceBeverageFourth = this.state.priceBeverage[3];
        const nameSmoothieFirst = this.state.nameSmoothie[0];
        const nameSmoothieSecond = this.state.nameSmoothie[1];
        const nameSmoothieThird = this.state.nameSmoothie[2];
        const priceSmoothieFirst = this.state.priceSmoothie[0];
        const priceSmoothieSecond = this.state.priceSmoothie[1];
        const priceSmoothieThird = this.state.priceSmoothie[2];
        const volumeSmoothieFirst = this.state.volumeSmoothie[0];
        const volumeSmoothieSecond = this.state.volumeSmoothie[1];
        const volumeSmoothieThird = this.state.volumeSmoothie[2];
        const nameSandwichFirst = this.state.nameSandwich[0];
        const nameSandwichSecond = this.state.nameSandwich[1];
        const nameSandwichThird = this.state.nameSandwich[2];
        const nameSandwichFourth = this.state.nameSandwich[3];
        const priceSandwichFirst = this.state.priceSandwich[0];
        const priceSandwichSecond = this.state.priceSandwich[1];
        const priceSandwichThird = this.state.priceSandwich[2];
        const priceSandwichFourth = this.state.priceSandwich[3];
        const descriptionSandwichFirst = this.state.descriptionSandwich[0];

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
                              priceDessertFourth={priceDessertFourth}
                              nameBeverageFirst={nameBeverageFirst}
                              nameBeverageSecond={nameBeverageSecond}
                              nameBeverageThird={nameBeverageThird}
                              nameBeverageFourth={nameBeverageFourth}
                              volumeFirst={volumeFirst}
                              volumeSecond={volumeSecond}
                              volumeThird={volumeThird}
                              volumeFourth={volumeFourth}
                              priceBeverageFirst={priceBeverageFirst}
                              priceBeverageSecond={priceBeverageSecond}
                              priceBeverageThird={priceBeverageThird}
                              priceBeverageFourth={priceBeverageFourth}
                              nameSmoothieFirst={nameSmoothieFirst}
                              nameSmoothieSecond={nameSmoothieSecond}
                              nameSmoothieThird={nameSmoothieThird}
                              priceSmoothieFirst={priceSmoothieFirst}
                              priceSmoothieSecond={priceSmoothieSecond}
                              priceSmoothieThird={priceSmoothieThird}
                              volumeSmoothieFirst={volumeSmoothieFirst}
                              volumeSmoothieSecond={volumeSmoothieSecond}
                              volumeSmoothieThird={volumeSmoothieThird}
                              nameSandwichFirst={nameSandwichFirst}
                              nameSandwichSecond={nameSandwichSecond}
                              nameSandwichThird={nameSandwichThird}
                              nameSandwichFourth={nameSandwichFourth}
                              priceSandwichFirst={priceSandwichFirst}
                              priceSandwichSecond={priceSandwichSecond}
                              priceSandwichThird={priceSandwichThird}
                              priceSandwichFourth={priceSandwichFourth}
                              descriptionSandwichFirst={descriptionSandwichFirst}/>
            </div>
        )
    }
}