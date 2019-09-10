import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Card} from 'semantic-ui-react'
import Button from '@material-ui/core/Button'

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 500,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}

            >
                <Tab label="Десерты" {...a11yProps(0)} />
                <Tab label="Лимонады" {...a11yProps(1)} />
                <Tab label="Смузи" {...a11yProps(2)} />
                <Tab label="Сэндвичи" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className='cards_size d_flex'>
                    <div className='card_'>
                        <Card>
                            <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg"
                                 alt=''/>
                            <div className='description_size'>
                                <h3>{props.nameDessertFirst}</h3>
                            </div>
                            <span>Цена:{props.priceDessertFirst}</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/dessert2.jpg" alt=''/>
                            <div className='description_size'>
                                <h3>{props.nameDessertSecond}</h3>
                            </div>
                            <span>Цена:{props.priceDessertSecond}</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/dessert3.jpg" alt=''/>
                            <div className='description_size'>
                                <h3>{props.nameDessertThird}</h3>
                            </div>
                            <span>Цена: {props.priceDessertThird}</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/dessert4.jpg" alt=''/>
                            <div className='description_size'>
                                <h3>{props.nameDessertFourth}</h3>
                            </div>
                            <span>Цена: {props.priceDessertFourth}</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='cards_size d_flex'>
                    <div className='card_'>
                        <Card>
                            <img className='img_size' src="https://easymeal-app.s3.amazonaws.com/products/lemonade1.jpg"
                                 alt=''/>
                            <div className='description_size'>
                                <h3>Имбирный лимонад (300мл)</h3>
                            </div>
                            <span>Цена: 1,99</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/lemonade2.jpg" alt=''/>
                            <div className='description_size'>
                                <h3>Абрикосовый лимонад(300мл)
                                </h3>
                            </div>
                            <span>Цена: 1,99</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/lemonade1.jpg" alt=''/>
                            <div className='description_size'>
                                <h3>Имбирный лимонад(300мл)</h3>
                            </div>
                            <span>Цена: 2,49</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                    <div className='card_'>
                        <Card>
                            <img className='img_size'
                                 src="https://easymeal-app.s3.amazonaws.com/products/lemonade3.jpg" alt=''/>
                            <div className='description_size'>
                                <h5>Лимонад на основе березового сока с клубникой и мятой(330мл)</h5>
                            </div>
                            <span>Цена: 1,15</span>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Добавить в корзину
                            </Button>
                        </Card>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </div>
    );
}