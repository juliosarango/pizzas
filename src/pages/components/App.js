import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Navigation from './navigation'
import LandingPage from './landing';
import SignUpPage from './signup';
import SignInPage from './signin';
import PasswordPage from './password';
import HomePage from './home';
import AccountPage from './account';

import * as routes from '../../constants/routes'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr/>
        <Route
          exact path = {routes.LANDING}
          component = {() => <LandingPage />}
        />
        <Route
          exact path = {routes.SIGN_UP}
          component = {() => <SignUpPage />}
        />
        <Route
          exact path = {routes.SIGN_IN}
          component = {() => <SignInPage />}
        />
        <Route
          exact path = {routes.PASSWORD_FORGET}
          component = {() => <PasswordPage />}
        />
        <Route
          exact path = {routes.HOME}
          component = {() => <HomePage />}
        />
        <Route
          exact path = {routes.ACCOUNT}
          component = {() => <AccountPage />}
        />
      </div>
    </Router>
  )
}
export default App;
