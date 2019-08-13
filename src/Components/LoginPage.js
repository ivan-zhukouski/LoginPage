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
            loading: false,
            errorForm: false,
            errorInput: false,
        };
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange = event => this.setState({[event.target.id]:event.target.value});
    handleOnSubmit (event){
        event.preventDefault();
        this.props.onSubmit(this.state);
         console.log(event);
          if (this.state.email==='vano@gmail.com', this.state.password === '111111'){
              this.setState({errorForm:false,errorInput:false});
              this.setState({loading:true});
         }
          else{
            this.setState({errorForm:true,errorInput:true, loading:false, email:'', password:''})
         }
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
                <Form error={this.state.errorForm}
                      className = 'main_form'
                      >
                    <Form.Field >
                        <Form.Input error={this.state.errorInput}
                                    type='email'
                                    transparent
                                    size='big'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'
                                    name='e-mail'
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                    id='email' />
                        <Form.Input error={this.state.errorInput}
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
                    <Form.Button loading={this.state.loading}
                                 fluid
                                 color='teal'
                                 content='Submit' onClick={this.handleOnSubmit}/>
                </Form>
            </div>
        )
    }
}
