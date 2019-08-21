import React,{Component} from 'react'
import {Form, Message} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../form.css'
export default class LogoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            isLoading: false,
            error: false,
            clientToken: false,
        };
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange = event => {
        this.setState({[event.target.id]:event.target.value})
    };
    handleOnSubmit (event){
        event.preventDefault();
        let json = JSON.stringify({email:this.state.email, password: this.state.password});
        fetch('https://www.api.fastbuy.by/kiosk/api/v1/auth/login',{
            method:'POST',
            body: json,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response =>{
            response.ok ? this.setState({isLoading:true,error:false})
                        : new Promise.reject();
            this.props.history.push({pathname:'/user/profile'});
            return  response.json();
        }).then((data)=>{
            console.log(data);
            localStorage.setItem('User', JSON.stringify(data))
        }).catch(()=>{
            this.setState({error:true,isLoading:false, email:'',password:''});
        });
    }
    render(){
        return(
            <div className='container'>
                <div className='img_block'>
                    <div className='img_text'>Log-in</div>
                </div>
                <Form error={this.state.error}
                      className = 'main_form'
                      onSubmit={this.handleOnSubmit}
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
                                    id='email'
                                    className='input_Size' />
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
                                    id='password'
                                    className='input_Size'/>
                        <Message
                            error
                            header='Error'
                            content='The E-mail address or password is incorrect'
                        />
                    </Form.Field >
                    <Form.Button loading={this.state.isLoading}
                                 fluid
                                 color='teal'
                                 content='Submit' />
                </Form>
            </div>
        )
    }
}
