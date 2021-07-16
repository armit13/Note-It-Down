import React from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import firebase from 'firebase';

class ForgotPassword extends React.Component {
    
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            errors: ''
        }
    }

    render() { 

        const { classes } = this.props ;

        return ( 
            <div className = {classes.body}>
            <main className = { classes.main }>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h3' variant='h5'>
                    Create New Password
                </Typography>
                <form className = {classes.form} onSubmit={(e) => this.submitLogin(e)}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor = 'forgot-email-input'>Enter Your Email</InputLabel>
                        <Input autoComplete='email' autoFocus id='forgot-email-input' onChange={(e) => this.userTyping('email',e)}></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
                </form>
                {
                    this.state.errors ?
                    <Typography className={classes.errorText} component='h5' variant='h6'>
                        {this.state.errors}
                    </Typography> :
                    null
                }
                <br></br>
                <Link className={classes.logInLink} to='/login'>Back to Login Form </Link>
            </Paper>
        </main>
        </div>
         );
    }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            default:
                break;
        }
    }

    submitLogin = async (e) => {
        e.preventDefault();
    await firebase
            .auth()
            .sendPasswordResetEmail(this.state.email)
            .then(() => {
                window.alert('Mail to reset the password has been sent successfully');
                this.props.history.push('/login');
            }, err => {
                this.setState({errors: err.message});
                console.log(err);
            })
    }

}
 
export default withStyles(styles)(ForgotPassword);