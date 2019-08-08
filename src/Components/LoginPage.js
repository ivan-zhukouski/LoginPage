import React,{Component} from 'react'
import { Form,Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../form.css'
const src= '../Images/Logo.png';
export default class LogoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            submittedEmail:'',
            submittedPassword:''
        }
    }
    handleChange = event => this.setState({[event.target.id]:event.target.value});
    handleSubmit = (event)=> {
        const {email, password} = this.state;
        this.setState({submittedEmail: email,submittedPassword:password});
        console.log('Submitted email is ' + this.state.submittedEmail + ' and password is '+ this.state.submittedPassword);
        event.preventDefault();
        if (this.state.submittedEmail === 'stig' , this.state.submittedPassword === 'stig'){
           alert('Hi Stig');
        }
        else{
            this.props.history.push({
                pathname: '/error'
            })
        }
    };
    render(){
        return(
            <div className='container'>
                <div className='img_block'>
                    <Image className='logo_img' src={src} circular verticalAlign='middle'/>
                    <span className='img_text'>Log-in to your account</span>

                </div>
                <Form className = 'main_form' onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field >
                        <Form.Input transparent size='big'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'
                                    name='e-mail'
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                    id='email' />
                        <Form.Input transparent size='big' icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange.bind(this)}
                                    id='password'/>
                    </Form.Field >
                    <Form.Button fluid color='teal' content='Submit'/>
                </Form>
            </div>
        )
    }
}
