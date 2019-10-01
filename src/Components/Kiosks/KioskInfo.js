import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import GoodsPage from './GoodsPage'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Kiosk.css'
import SimpleSelect from './Selects/SelectFrom'


export default function KioskInfo(props) {
    const[values, setValues]=React.useState({
        from:'',
        am:'',
        to:'',
        amPm:''
    });

    const handleChange = event => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        console.log(event);
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <div className='kioskInfo'>
                    <div className='kioskInfoBlockOne'>
                        <h2>Kiosks > Kiosk on {props.kioskAddressEn} </h2>
                        <h2>General info:</h2>
                        <TextField
                            id="standard-name"
                            label="Title"
                            value={props.kioskTitle}
                            margin="normal"
                            className='title'
                        />
                        <TextField
                            id="standard-name"
                            label="Address"
                            value={props.kioskAddressEn}
                            margin="normal"
                            className='title'
                        />
                        <Typography style={{color: 'grey', marginTop: '15px'}} variant='h5'>
                            Working hours
                        </Typography>
                        <div className='workHoursFlex' >
                            <FormControl style={{width: '50%', marginRight: '15px'}}>
                                <InputLabel>From</InputLabel>
                                <Select
                                    value={values.from}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'from',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={0} >0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                </Select>

                            </FormControl>
                            <FormControl style={{width:'60px'}}>
                                <InputLabel>am/pm</InputLabel>
                                <Select
                                    value={values.am}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'am',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={0} >am</MenuItem>
                                    <MenuItem value={1}>pm</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='workHoursFlex'>
                            <FormControl style={{width: '50%', marginRight: '15px'}}>
                                <InputLabel>To</InputLabel>
                                <Select
                                    value={values.to}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'to',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={0} >0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                </Select>

                            </FormControl>
                            <FormControl style={{width:'60px'}}>
                                <InputLabel>am/pm</InputLabel>
                                <Select
                                    value={values.amPm}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'amPm',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={0} >am</MenuItem>
                                    <MenuItem value={1}>pm</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='blockTwo'>
                        <div className='PickALocation'
                             style={{display: 'flex', alignItems: 'center', fontSize: '20px', marginRight: '20px'}}>
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
                <div className='productsPageFlex'>
                    <GoodsPage
                        kioskAddressEn={props.kioskAddressEn}
                        kioskTitle={props.kioskTitle}
                        hoursFrom={props.hoursFrom}
                        hoursTo={props.hoursTo}
                        nameDessertFirst={props.nameDessertFirst}
                        nameDessertSecond={props.nameDessertSecond}
                        countDessertsAll={props.countDessertsAll}
                        nameDessertThird={props.nameDessertThird}
                        nameDessertFourth={props.nameDessertFourth}
                        nameSmoothieThird={props.nameSmoothieThird}
                        nameSmoothieSecond={props.nameSmoothieSecond}
                        nameSmoothieFirst={props.nameSmoothieFirst}
                        priceBeverageFourth={props.priceBeverageFourth}
                        priceBeverageThird={props.priceBeverageThird}
                        priceBeverageSecond={props.priceBeverageSecond}
                        priceBeverageFirst={props.priceBeverageFirst}
                        volumeFourth={props.volumeFourth}
                        volumeThird={props.volumeThird}
                        volumeSecond={props.volumeSecond}
                        volumeFirst={props.volumeFirst}
                        nameBeverageFourth={props.nameBeverageFourth}
                        nameBeverageThird={props.nameBeverageThird}
                        nameBeverageSecond={props.nameBeverageSecond}
                        nameBeverageFirst={props.nameBeverageFirst}
                        priceDessertFourth={props.priceDessertFourth}
                        priceDessertThird={props.priceDessertThird}
                        priceDessertSecond={props.priceDessertSecond}
                        priceDessertFirst={props.priceDessertFirst}
                        countDessertsFirst={props.countDessertsFirst}
                        countSandwichesAll={props.countSandwichesAll}
                        countSandwichesFourth={props.countSandwichesFourth}
                        countSandwichesThird={props.countSandwichesThird}
                        countSandwichesSecond={props.countSandwichesSecond}
                        countSandwichesFirst={props.countSandwichesFirst}
                        countSmoothiesAll={props.countSmoothiesAll}
                        countSmoothiesThird={props.countSmoothiesThird}
                        countSmoothiesSecond={props.countSmoothiesSecond}
                        countSmoothiesFirst={props.countSmoothiesFirst}
                        countBeveragesAll={props.countBeveragesAll}
                        countBeveragesFourth={props.countBeveragesFourth}
                        countBeveragesThird={props.countBeveragesThird}
                        countBeveragesSecond={props.countBeveragesSecond}
                        countBeveragesFirst={props.countBeveragesFirst}
                        countDessertsFourth={props.countDessertsFourth}
                        countDessertsThird={props.countDessertsThird}
                        countDessertsSecond={props.countDessertsSecond}
                        descriptionSandwichFirst={props.descriptionSandwichFirst}
                        priceSandwichFourth={props.priceSandwichFourth}
                        priceSandwichThird={props.priceSandwichThird}
                        priceSandwichSecond={props.priceSandwichSecond}
                        priceSandwichFirst={props.priceSandwichFirst}
                        nameSandwichFourth={props.nameSandwichFourth}
                        nameSandwichThird={props.nameSandwichThird}
                        nameSandwichSecond={props.nameSandwichSecond}
                        nameSandwichFirst={props.nameSandwichFirst}
                        volumeSmoothieThird={props.volumeSmoothieThird}
                        volumeSmoothieSecond={props.volumeSmoothieSecond}
                        volumeSmoothieFirst={props.volumeSmoothieFirst}
                        priceSmoothieThird={props.priceSmoothieThird}
                        priceSmoothieSecond={props.priceSmoothieSecond}
                        priceSmoothieFirst={props.priceSmoothieFirst}/>
                </div>
            </Container>
        </React.Fragment>
    )
}