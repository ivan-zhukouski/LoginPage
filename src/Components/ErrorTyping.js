import React from 'react'
import {Form, Image,Button} from 'semantic-ui-react'
import '../form.css'
const src= '../Images/Logo.png';

export default class ErrorTyping extends React.Component{
    handleOnClick=()=>{
        this.props.history.push({
            pathname:'/'
        })
    };
    render(){
        return(
            <div className='container'>
                <div className='img_block'>
                    <Image className='logo_img' src={src} circular verticalAlign='middle'/>
                    <span className='img_text'>Log-in to your account</span>

                </div>
                <Form error className = 'main_form'>
                    <Form.Field>
                        <Form.Input error={{ content: 'Please enter your E-mail' }}
                                    transparent
                                    size='big'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'/>
                        <Form.Input error={{ content: 'Please enter your first name' }}
                                    transparent
                                    size='big'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'/>
                    </Form.Field >
                    <Button fluid color='teal' content='Go back' onClick={this.handleOnClick.bind(this)}/>
                </Form>
            </div>
        )
    }
}


