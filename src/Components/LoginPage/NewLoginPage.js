import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth:960,
        margin:'auto',
        border:'1px solid black',
        marginTop:50,
        height:500,
        marginBottom:50,
    },
    form:{
        display:'flex',
        justifyContent:'center',
        flexFlow:'column',
        width:350,
        backgroundColor:'#fff',
        margin:'auto',
        border:'1px solid black',
        padding:10,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
        padding:10,

    },
    margin: {
        margin: theme.spacing(1),
    },
    dense: {
        marginTop: 19,
    },
    color:{
        color:'#fff',
    },
    menu: {
        width: 200,
    },
}));

export default function TextFields() {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <h1 style={{marginTop:50, color:'blue', }}>EasyMeal</h1>
            <div className={classes.form}>
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"

                            />
                        </Grid>
                    </Grid>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}>
                    Login
                </Button>
            </div>

        </form>
    );
}