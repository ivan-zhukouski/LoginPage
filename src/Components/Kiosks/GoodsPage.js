import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Kiosk.css'
import Card from '@material-ui/core/Card';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function GoodsPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label={"Десерты" + '(' + props.countDessertsAll + ')'} {...a11yProps(0)} />
                    <Tab label={'Лимонады ' + '(' + props.countBeveragesAll + ')'} {...a11yProps(1)} />
                    <Tab label={'Смузи ' + '(' + props.countSmoothiesAll + ')'} {...a11yProps(2)} />
                    <Tab label={'Сэндвичи ' + '(' + props.countSandwichesAll + ')'} {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className='d_flex'>
                    <Card className='cards'>
                        <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg"
                             alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameDessertFirst}</h3>
                        </div>
                        <span>Количество: {props.countDessertsFirst}</span>
                        <br/>
                        <span>Цена:{props.priceDessertFirst}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/dessert2.jpg" alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameDessertSecond}</h3>
                        </div>
                        <span>Количество: {props.countDessertsSecond}</span>
                        <br/>
                        <span>Цена:{props.priceDessertSecond}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/dessert3.jpg" alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameDessertThird}</h3>
                        </div>
                        <span>Количество: {props.countDessertsThird}</span>
                        <br/>
                        <span>Цена: {props.priceDessertThird}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/dessert4.jpg" alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameDessertFourth}</h3>
                        </div>
                        <span>Количество: {props.countDessertsFourth}</span>
                        <br/>
                        <span>Цена: {props.priceDessertFourth}</span>
                    </Card>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='cards_size d_flex'>
                    <Card className='cards'>
                        <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/lemonade1.jpg"
                             alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameBeverageFirst}</h3>
                            <span>{props.volumeFirst}</span>
                        </div>
                        <span>Количество: {props.countBeveragesFirst}</span>
                        <br/>
                        <span>Цена: {props.priceBeverageFirst}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/lemonade2.jpg" alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameBeverageSecond}</h3>
                            <span style={{fontSize: '10px'}}>{props.volumeSecond}</span>
                        </div>
                        <span>Количество: {props.countBeveragesSecond}</span>
                        <br/>
                        <span>Цена: {props.priceBeverageSecond}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/lemonade1.jpg" alt=''/>
                        <div className='description_size'>
                            <h3>{props.nameBeverageThird}</h3>
                            <span>{props.volumeThird}</span>
                        </div>
                        <span>Количество: {props.countBeveragesThird}</span>
                        <br/>
                        <span>Цена: {props.priceBeverageThird}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/lemonade3.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameBeverageFourth}</h5>
                            <span>{props.volumeFourth}</span>
                        </div>
                        <span>Количество: {props.countBeveragesFourth}</span>
                        <br/>
                        <span>Цена: {props.priceBeverageFourth}</span>
                    </Card>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='cards_size d_flex'>
                    <Card className='cards'>
                        <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/smoothie1.jpg"
                             alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSmoothieFirst}</h5>
                            <span>{props.volumeSmoothieFirst}</span>
                        </div>
                        <span>Количество: {props.countSmoothiesFirst}</span>
                        <br/>
                        <span>Цена: {props.priceSmoothieFirst}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/smoothie2.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSmoothieSecond}</h5>
                            <span style={{fontSize: '15px'}}>{props.volumeSmoothieSecond}</span>
                        </div>
                        <span>Количество: {props.countSmoothiesSecond}</span>
                        <br/>
                        <span>Цена: {props.priceSmoothieSecond}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/smoothie3.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSmoothieThird}</h5>
                            <span>{props.volumeSmoothieThird}</span>
                        </div>
                        <span>Количество: {props.countSmoothiesThird}</span>
                        <br/>
                        <span>Цена: {props.priceSmoothieThird}</span>
                    </Card>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='cards_size d_flex'>
                    <Card className='cards'>
                        <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/sandwich1.jpg"
                             alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSandwichFirst}</h5>
                            <span style={{fontSize: '8px'}}>{props.descriptionSandwichFirst}</span>
                        </div>
                        <span>Количество: {props.countSandwichesFirst}</span>
                        <br/>
                        <span>Цена:{props.priceSandwichFirst}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/sandwich2.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSandwichSecond}</h5>
                        </div>
                        <span>Количество: {props.countSandwichesSecond}</span>
                        <br/>
                        <span>Цена:{props.priceSandwichSecond}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/sandwich3.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSandwichThird}</h5>
                        </div>
                        <span>Количество: {props.countSandwichesThird}</span>
                        <br/>
                        <span>Цена: {props.priceSandwichThird}</span>
                    </Card>
                    <Card className='cards'>
                        <img className='img_size'
                             src="https://easymeal-app.s3.amazonaws.com/products/sandwich4.jpg" alt=''/>
                        <div className='description_size'>
                            <h5>{props.nameSandwichFourth}</h5>
                        </div>
                        <span>Количество: {props.countSandwichesFourth}</span>
                        <br/>
                        <span>Цена: {props.priceSandwichFourth}</span>
                    </Card>
                </div>
            </TabPanel>
        </div>
    );
}