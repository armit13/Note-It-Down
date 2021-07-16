import React from 'react';
import { Route } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import ForgotPassword from './forgotpassword/forgotpassword';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <React.Fragment>
        <main className = "app-container">
          <Route exact path='/' component={LoginComponent}></Route>
          <Route path='/login' component={LoginComponent}></Route>
          <Route path = '/signup' component={SignupComponent}></Route>
          <Route path = '/dashboard' component={DashboardComponent}></Route>
          <Route path = '/forgotpassword' component={ForgotPassword}></Route>
        </main>
      </React.Fragment>
    );
  }

  
}

export default App;
