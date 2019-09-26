import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import GoodsPage from './GoodsPage'
import './Kiosk.css'

export default class KioskInfo extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <div className='kioskInfo' >
                        <div className='kioskInfoBlockOne'>
                            <h2>Kiosks > Kiosk on {this.props.kioskAddressEn} </h2>
                            <h2>General info:</h2>
                            <Typography className='title' style={{color: 'grey', marginTop: '15px'}} variant='h5'>
                                Title
                            </Typography>
                            <Typography style={{color: 'black', marginTop: '15px'}} variant='h5'>
                                {this.props.kioskTitle}
                            </Typography>
                            <hr/>
                            <Typography style={{color: 'grey', marginTop: '15px'}} variant='h5'>
                                Address
                            </Typography>
                            <Typography style={{color: 'black', marginTop: '15px'}} variant='h5'>
                                {this.props.kioskAddressEn}
                            </Typography>
                            <hr/>
                            <Typography style={{color: 'grey', marginTop: '15px'}} variant='h5'>
                                Working hours
                            </Typography>
                            <div className='workHoursFlex' >
                                <div style={{width: '50%', marginRight: '15px'}}>
                                    <p>From {this.props.hoursFrom} am</p>
                                    <hr/>
                                </div>
                                <div style={{width: '50%'}}>
                                    <p>To {this.props.hoursTo} pm</p>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className='blockTwo'>
                            <div className='PickALocation' style={{display: 'flex', alignItems: 'center', fontSize: '20px',marginRight:'20px'}}>
                                <a>
                                    Pick a location
                                </a>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img style={{width: '200px'}}
                                     src="https://sc01.alicdn.com/kf/HTB1.5nJSpXXXXbhapXXq6xXFXXXX/Professional-Beverage-kiosk-design-Bubble-Tea-Showcase.jpg_350x350.jpg"
                                     alt=''/>
                            </div>
                        </div>

                    </div>
                    <h2>Products</h2>
                    <div className='productsPageFlex' >
                        <GoodsPage
                            kioskAddressEn={this.props.kioskAddressEn}
                            kioskTitle={this.props.kioskTitle}
                            hoursFrom={this.props.hoursFrom}
                            hoursTo={this.props.hoursTo}
                            nameDessertFirst={this.props.nameDessertFirst}
                            nameDessertSecond={this.props.nameDessertSecond}
                            countDessertsAll={this.props.countDessertsAll}
                            nameDessertThird={this.props.nameDessertThird}
                            nameDessertFourth={this.props.nameDessertFourth}
                            nameSmoothieThird={this.props.nameSmoothieThird}
                            nameSmoothieSecond={this.props.nameSmoothieSecond}
                            nameSmoothieFirst={this.props.nameSmoothieFirst}
                            priceBeverageFourth={this.props.priceBeverageFourth}
                            priceBeverageThird={this.props.priceBeverageThird}
                            priceBeverageSecond={this.props.priceBeverageSecond}
                            priceBeverageFirst={this.props.priceBeverageFirst}
                            volumeFourth={this.props.volumeFourth}
                            volumeThird={this.props.volumeThird}
                            volumeSecond={this.props.volumeSecond}
                            volumeFirst={this.props.volumeFirst}
                            nameBeverageFourth={this.props.nameBeverageFourth}
                            nameBeverageThird={this.props.nameBeverageThird}
                            nameBeverageSecond={this.props.nameBeverageSecond}
                            nameBeverageFirst={this.props.nameBeverageFirst}
                            priceDessertFourth={this.props.priceDessertFourth}
                            priceDessertThird={this.props.priceDessertThird}
                            priceDessertSecond={this.props.priceDessertSecond}
                            priceDessertFirst={this.props.priceDessertFirst}
                            countDessertsFirst={this.props.countDessertsFirst}
                            countSandwichesAll={this.props.countSandwichesAll}
                            countSandwichesFourth={this.props.countSandwichesFourth}
                            countSandwichesThird={this.props.countSandwichesThird}
                            countSandwichesSecond={this.props.countSandwichesSecond}
                            countSandwichesFirst={this.props.countSandwichesFirst}
                            countSmoothiesAll={this.props.countSmoothiesAll}
                            countSmoothiesThird={this.props.countSmoothiesThird}
                            countSmoothiesSecond={this.props.countSmoothiesSecond}
                            countSmoothiesFirst={this.props.countSmoothiesFirst}
                            countBeveragesAll={this.props.countBeveragesAll}
                            countBeveragesFourth={this.props.countBeveragesFourth}
                            countBeveragesThird={this.props.countBeveragesThird}
                            countBeveragesSecond={this.props.countBeveragesSecond}
                            countBeveragesFirst={this.props.countBeveragesFirst}
                            countDessertsFourth={this.props.countDessertsFourth}
                            countDessertsThird={this.props.countDessertsThird}
                            countDessertsSecond={this.props.countDessertsSecond}
                            descriptionSandwichFirst={this.props.descriptionSandwichFirst}
                            priceSandwichFourth={this.props.priceSandwichFourth}
                            priceSandwichThird={this.props.priceSandwichThird}
                            priceSandwichSecond={this.props.priceSandwichSecond}
                            priceSandwichFirst={this.props.priceSandwichFirst}
                            nameSandwichFourth={this.props.nameSandwichFourth}
                            nameSandwichThird={this.props.nameSandwichThird}
                            nameSandwichSecond={this.props.nameSandwichSecond}
                            nameSandwichFirst={this.props.nameSandwichFirst}
                            volumeSmoothieThird={this.props.volumeSmoothieThird}
                            volumeSmoothieSecond={this.props.volumeSmoothieSecond}
                            volumeSmoothieFirst={this.props.volumeSmoothieFirst}
                            priceSmoothieThird={this.props.priceSmoothieThird}
                            priceSmoothieSecond={this.props.priceSmoothieSecond}
                            priceSmoothieFirst={this.props.priceSmoothieFirst}/>
                    </div>

                </Container>
            </React.Fragment>
        )
    }
}