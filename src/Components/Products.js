import React from 'react'
import { Tab,Card,Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Десерты', render: () => <Tab.Pane>
            <Card>
                <Image src="https://easymeal-app.s3.amazonaws.com/products/dessert1.jpg" wrapped ui = {false} />
                <Card.Content>
                    <Card.Header></Card.Header>
                    <Card.Description>123
                    </Card.Description>
                </Card.Content>
            </Card>
        </Tab.Pane> },
    { menuItem: 'Лимонады', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Смузи', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Сэндвичи', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const TabExampleBasic = () => <Tab panes={panes} />;

export default TabExampleBasic
