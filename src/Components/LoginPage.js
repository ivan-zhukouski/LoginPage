import React from 'react'
import '../App.css'
import {Input} from 'semantic-ui-react'
import InputExampleInput from './input'
class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnChangePass = this.handleOnChangePass.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(event){
        console.log('email was changed!')
        this.setState({email:event.target.value})
    };
    handleOnChangePass(event){
        console.log('pass was changed!')
        this.setState({password:event.target.value})
    };
    handleOnSubmit(event){
        event.preventDefault();
        console.log('form was submitted!', 'Password is:', this.state.password,
            'E-mail is:', this.state.email)
        if (this.state.email === 'user',this.state.password === 'user'){
            this.props.history.push({
                pathname: '/userpage'
            })
        }else {
            this.props.history.push({
                pathname:'/error'
            })
        }
    }
    render() {
        return(
            <form className='form' onSubmit={this.handleOnSubmit}>

                    <Input focus type="text"
                       placeholder={'E-mail'}
                       onChange={this.handleOnChange}
                       value={this.state.email}/>


                    <input  type="password"
                       placeholder={'password'}
                       onChange={this.handleOnChangePass}
                       value={this.state.password} />

                <button className='width_element'>Login</button>
                <InputExampleInput/>
            </form>
        )
    }
}
export default LoginPage