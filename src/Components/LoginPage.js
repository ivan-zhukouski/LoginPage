import React,{Component} from 'react'
import {Form, Image, Message} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../form.css'

const src= '../Images/Logo.png';
export default class LogoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            isLoading: false,
            error: false,
        };
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange = event => this.setState({[event.target.id]:event.target.value});
    handleOnSubmit (event){
        event.preventDefault();
        console.log(event);
        fetch('https://www.api.fastbuy.by/kiosk/api/v1/auth/login',{
            method:'POST',
            body: JSON.stringify({email:this.state.email, password: this.state.password}),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response =>{
            if(response.ok){
                this.setState({isLoading:true})
            }
            else{
                this.setState({error:true,isLoading:false, email:'',password:''})
            }
            return response.json();
        }).then((data)=>{
            console.log(data);
        });
    }

    render(){
        return(
            <div className='container'>
                <div className='img_block'>
                    <Image className='logo_img'
                           src={src}
                           circular
                           verticalAlign='middle'/>
                    <span className='img_text'>Log-in</span>

                </div>
                <Form error={this.state.error}
                      className = 'main_form'
                      >
                    <Form.Field >
                        <Form.Input error={this.state.error}
                                    type='email'
                                    transparent
                                    size='big'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'
                                    name='e-mail'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    id='email' />
                        <Form.Input error={this.state.error}
                                    transparent
                                    size='big'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    id='password'/>
                        <Message
                            error
                            header='Error'
                            content='The E-mail address or password is incorrect'
                        />
                    </Form.Field >
                    <Form.Button loading={this.state.isLoading}
                                 fluid
                                 color='teal'
                                 content='Submit' onClick={this.handleOnSubmit}/>
                </Form>
            </div>
        )
    }
}
