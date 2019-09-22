import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import MainMenu from "../MainMenu/MainMenu";
import NavigationBar from "../MainMenu/NavigationBar";
import KioskInfo from "./KioskInfo";


const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks/5d372f320d2567534c1ba603';
export default class KioskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameDessert: ['', '', '', ''],
            priceDessert: ['', '', '', ''],
            nameBeverage: ['', '', '', ''],
            priceBeverage: ['', '', '', ''],
            volumeBeverage: ['', '', '', ''],
            nameSmoothie: ['', '', ''],
            priceSmoothie: ['', '', ''],
            volumeSmoothie: ['', '', ''],
            nameSandwich: ['', '', '', ''],
            priceSandwich: ['', '', '', ''],
            descriptionSandwich: ['', '', '', ''],
            countDesserts: ['', '', '', ''],
            countDessertsAll: '',
            countBeverages: ['', '', '', ''],
            countBeveragesAll: '',
            countSmoothies: ['', '', '', ''],
            countSmoothiesAll: '',
            countSandwiches: ['', '', '', ''],
            countSandwichesAll: '',
            kioskAddressEn:'',
            kioskTitle:'',
            hoursFrom: '',
            hoursTo:'',
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
                nameDessert: [`${data.items[0].products[0].title}`, `${data.items[0].products[1].title}`, `${data.items[0].products[2].title}`, `${data.items[0].products[3].title}`],
                priceDessert: [`${data.items[0].products[0].price}`, `${data.items[0].products[1].price}`, `${data.items[0].products[2].price}`, `${data.items[0].products[3].price}`],
                nameBeverage: [`${data.items[1].products[0].title}`, `${data.items[1].products[1].title}`, `${data.items[1].products[2].title}`, `${data.items[1].products[3].title}`],
                volumeBeverage: [`${data.items[1].products[0].description}`, `${data.items[1].products[1].description}`, `${data.items[1].products[2].description}`, `${data.items[1].products[3].description}`],
                priceBeverage: [`${data.items[1].products[0].price}`, `${data.items[1].products[1].price}`, `${data.items[1].products[2].price}`, `${data.items[1].products[3].price}`],
                nameSmoothie: [`${data.items[2].products[0].title}`, `${data.items[2].products[1].title}`, `${data.items[2].products[2].title}`,],
                priceSmoothie: [`${data.items[2].products[0].price}`, `${data.items[2].products[1].price}`, `${data.items[2].products[2].price}`,],
                volumeSmoothie: [`${data.items[2].products[0].description}`, `${data.items[2].products[1].description}`, `${data.items[2].products[2].description}`,],
                nameSandwich: [`${data.items[3].products[0].title}`, `${data.items[3].products[1].title}`, `${data.items[3].products[2].title}`, `${data.items[3].products[3].title}`,],
                priceSandwich: [`${data.items[3].products[0].price}`, `${data.items[3].products[1].price}`, `${data.items[3].products[2].price}`, `${data.items[3].products[3].price}`,],
                descriptionSandwich: [`${data.items[3].products[0].description}`, '', '', ''],
                countDesserts: [`${data.items[0].products[0].count}`, `${data.items[0].products[1].count}`, `${data.items[0].products[2].count}`, `${data.items[0].products[3].count}`],
                countBeverages: [`${data.items[1].products[0].count}`, `${data.items[1].products[1].count}`, `${data.items[1].products[2].count}`, `${data.items[1].products[3].count}`,],
                countSmoothies: [`${data.items[2].products[0].count}`, `${data.items[2].products[1].count}`, `${data.items[2].products[2].count}`],
                countSandwiches: [`${data.items[3].products[0].count}`, `${data.items[3].products[1].count}`, `${data.items[3].products[2].count}`, `${data.items[3].products[3].count}`,],
            });
            let sumDesserts = 0;
            for (let i = 0; i < this.state.countDesserts.length; i++) {
                sumDesserts = sumDesserts + parseInt(this.state.countDesserts[i]);
            }
            this.setState({countDessertsAll: sumDesserts});
            let sumBeverages = 0;
            for (let i = 0; i < this.state.countBeverages.length; i++) {
                sumBeverages = sumBeverages + parseInt(this.state.countBeverages[i]);
            }
            this.setState({countBeveragesAll: sumBeverages});
            let sumSmoothies = 0;
            for (let i = 0; i < this.state.countSmoothies.length; i++) {
                sumSmoothies = sumSmoothies + parseInt(this.state.countSmoothies[i]);
            }
            this.setState({countSmoothiesAll: sumSmoothies});
            let sumSandwiches = 0;
            for (let i = 0; i < this.state.countSandwiches.length; i++) {
                sumSandwiches = sumSandwiches + parseInt(this.state.countSandwiches[i])
            }
            this.setState({countSandwichesAll: sumSandwiches});
            this.setState({
                kioskAddressEn:`${data.address.en}`,
                kioskTitle:`${data.title}`,
                hoursFrom:`${data.hours.from}`,
                hoursTo:`${data.hours.to}`});
            console.log(this.state.countSandwichesAll);
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const nameDessertFirst = this.state.nameDessert[0];
        const nameDessertSecond = this.state.nameDessert[1];
        const nameDessertThird = this.state.nameDessert[2];
        const nameDessertFourth = this.state.nameDessert[3];
        const priceDessertFirst = this.state.priceDessert[0];
        const priceDessertSecond = this.state.priceDessert[1];
        const priceDessertThird = this.state.priceDessert[2];
        const priceDessertFourth = this.state.priceDessert[3];
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
        const countDessertsFirst = this.state.countDesserts[0];
        const countDessertsSecond = this.state.countDesserts[1];
        const countDessertsThird = this.state.countDesserts[2];
        const countDessertsFourth = this.state.countDesserts[3];
        const countDessertsAll = this.state.countDessertsAll;
        const countBeveragesFirst = this.state.countBeverages[0];
        const countBeveragesSecond = this.state.countBeverages[1];
        const countBeveragesThird = this.state.countBeverages[2];
        const countBeveragesFourth = this.state.countBeverages[3];
        const countBeveragesAll = this.state.countBeveragesAll;
        const countSmoothiesFirst = this.state.countSmoothies[0];
        const countSmoothiesSecond = this.state.countSmoothies[1];
        const countSmoothiesThird = this.state.countSmoothies[2];
        const countSmoothiesAll = this.state.countSmoothiesAll;
        const countSandwichesFirst = this.state.countSandwiches[0];
        const countSandwichesSecond = this.state.countSandwiches[1];
        const countSandwichesThird = this.state.countSandwiches[2];
        const countSandwichesFourth = this.state.countSandwiches[3];
        const countSandwichesAll = this.state.countSandwichesAll;
        const kioskAddressEn = this.state.kioskAddressEn;
        const kioskTitle = this.state.kioskTitle;
        const hoursFrom =this.state.hoursFrom;
        const hoursTo=this.state.hoursTo;
        return (
            <div className='container_'>
                <MainMenu/>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <NavigationBar/>
                    <KioskInfo kioskAddressEn={kioskAddressEn}
                               kioskTitle={kioskTitle}
                               hoursFrom={hoursFrom}
                               hoursTo={hoursTo}
                               nameDessertFirst={nameDessertFirst}
                               nameDessertSecond={nameDessertSecond}
                               countDessertsAll={countDessertsAll}
                               nameDessertThird={nameDessertThird}
                               nameDessertFourth={nameDessertFourth}
                               nameSmoothieThird={nameSmoothieThird}
                               nameSmoothieSecond={nameSmoothieSecond}
                               nameSmoothieFirst={nameSmoothieFirst}
                               priceBeverageFourth={priceBeverageFourth}
                               priceBeverageThird={priceBeverageThird}
                               priceBeverageSecond={priceBeverageSecond}
                               priceBeverageFirst={priceBeverageFirst}
                               volumeFourth={volumeFourth}
                               volumeThird={volumeThird}
                               volumeSecond={volumeSecond}
                               volumeFirst={volumeFirst}
                               nameBeverageFourth={nameBeverageFourth}
                               nameBeverageThird={nameBeverageThird}
                               nameBeverageSecond={nameBeverageSecond}
                               nameBeverageFirst={nameBeverageFirst}
                               priceDessertFourth ={priceDessertFourth}
                               priceDessertThird={priceDessertThird}
                               priceDessertSecond={priceDessertSecond}
                               priceDessertFirst={priceDessertFirst}
                               countDessertsFirst={countDessertsFirst}
                               countSandwichesAll={countSandwichesAll}
                               countSandwichesFourth={countSandwichesFourth}
                               countSandwichesThird={countSandwichesThird}
                               countSandwichesSecond={countSandwichesSecond}
                               countSandwichesFirst={countSandwichesFirst}
                               countSmoothiesAll={countSmoothiesAll}
                               countSmoothiesThird={countSmoothiesThird}
                               countSmoothiesSecond={countSmoothiesSecond}
                               countSmoothiesFirst={countSmoothiesFirst}
                               countBeveragesAll={countBeveragesAll}
                               countBeveragesFourth={countBeveragesFourth}
                               countBeveragesThird={countBeveragesThird}
                               countBeveragesSecond={countBeveragesSecond}
                               countBeveragesFirst={countBeveragesFirst}
                               countDessertsFourth={countDessertsFourth}
                               countDessertsThird={countDessertsThird}
                               countDessertsSecond={countDessertsSecond}
                               descriptionSandwichFirst={descriptionSandwichFirst}
                               priceSandwichFourth={priceSandwichFourth}
                               priceSandwichThird={priceSandwichThird}
                               priceSandwichSecond={priceSandwichSecond}
                               priceSandwichFirst={priceSandwichFirst}
                               nameSandwichFourth={nameSandwichFourth}
                               nameSandwichThird={nameSandwichThird}
                               nameSandwichSecond={nameSandwichSecond}
                               nameSandwichFirst={nameSandwichFirst}
                               volumeSmoothieThird={volumeSmoothieThird}
                               volumeSmoothieSecond={volumeSmoothieSecond}
                               volumeSmoothieFirst={volumeSmoothieFirst}
                               priceSmoothieThird={priceSmoothieThird}
                               priceSmoothieSecond={priceSmoothieSecond}
                               priceSmoothieFirst={priceSmoothieFirst} />
                </div>
            </div>
        )
    }
}