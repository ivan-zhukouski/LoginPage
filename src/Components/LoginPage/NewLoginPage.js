import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import './LoginPage.css'
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';

const container = {
    maxWidth: 960,
    margin: 'auto',
    border: '1px solid black',
    marginTop: 50,
    height: 500,
    marginBottom: 50,
};

export default class LogoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorNone: {
                display:'none',
            },
            iconError:'',
            email: '',
            password: '',
            isLoading: false,
            error: false,
        };
    }
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value})
    };
    handleOnClick = event => {
        event.preventDefault();
        let json = JSON.stringify({email: this.state.email, password: this.state.password});
        fetch('https://www.api.fastbuy.by/kiosk/api/v1/auth/login', {
            method: 'POST',
            body: json,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            response.ok ? this.setState({error: false})
                : new Promise.reject();
            this.props.history.push({pathname: '/'});
            return response.json();
        }).then((data) => {
            console.log(data);
            localStorage.setItem('User', JSON.stringify(data))
        }).catch(() => {
            this.setState({error: true, email: '', password: '', errorNone:{display:'block',color:'red',fontSize:'15px'}});
        });
    };
    render() {
        return (
            <div>
                <div style={container} autoComplete="on">
                    <h1 style={{marginTop: '100px', color: 'blue'}}>EasyMeal</h1>
                    <form className='form'>
                        <div >
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <PersonIcon color={this.state.iconError} fontSize="large"/>
                                </Grid>
                                <Grid item>
                                    <TextField error={this.state.error}
                                               id="email"
                                               label="E-mail"
                                               type='email'
                                               className='textField'
                                               value={this.state.email}
                                               onChange={this.handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <LockIcon color={this.state.iconError} fontSize="large"/>
                                </Grid>
                                <Grid item>
                                    <TextField error={this.state.error}
                                               id="password"
                                               label="Password"
                                               type="password"
                                               autoComplete="current-password"
                                               margin="normal"
                                               className='textField'
                                               value={this.state.password}
                                               onChange={this.handleChange}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>
                            <FormHelperText
                                            style={this.state.errorNone}
                                            id="component-error-text">
                                The E-mail address or password is incorrect
                            </FormHelperText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                            <Button
                                style={{width: 30}}
                                size="medium"
                                variant="contained"
                                color="primary"
                                onClick={this.handleOnClick}
                            >Login
                                <CircularProgress size={20}  color="secondary" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
