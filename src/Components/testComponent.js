import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card,Image } from 'semantic-ui-react'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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

export default function VerticalTabs() {
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
                    <Card className='cards_size'>
                        <Image src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg" wrapped ui = {false} />
                        <Card.Content>
                            <Card.Header>Панна-кота с клубникой</Card.Header>
                            <Card.Description>123
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className='cards_size'>
                        <Image src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg" wrapped ui = {false} />
                        <Card.Content>
                            <Card.Header>Панна-кота с клубникой</Card.Header>
                            <Card.Description>123
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className='cards_size'>
                        <Image src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg" wrapped ui = {false} />
                        <Card.Content>
                            <Card.Header>Панна-кота с клубникой</Card.Header>
                            <Card.Description>123
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className='cards_size'>
                        <Image src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg" wrapped ui = {false} />
                        <Card.Content>
                            <Card.Header>Панна-кота с клубникой</Card.Header>
                            <Card.Description>123
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
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