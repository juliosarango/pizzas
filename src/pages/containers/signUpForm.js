import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';

const signUpPage = ({history}) => {
  return (
    <div>      
      <SignUpForm history = {history} />
    </div>
  );
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      username,
      email,
      passwordOne
  } = this.state;

  const {
    history
  } = this.props;

  auth.doCreateUserWithEmailAndPassword(email, passwordOne)
     .then(authUser => {
       this.setState( () => ({...INITIAL_STATE}));
       history.push(routes.HOME);
     })
     .catch( error => {
       this.setState(byPropKey('error', error))
     })


  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
      <form onSubmit = {this.onSubmit} >
         <input
           type="text" id="username"
           value = {username}
           placeholder = 'Full name'
           onChange = {event => this.setState(byPropKey('username', event.target.value )) }
         />
         <input
           type="text" id="email"
           value = {email}
           placeholder = "Email address"
           onChange ={event => this.setState(byPropKey('email', event.target.value))}
         />
         <input
           type="password" id="passwordOne"
           value = {passwordOne}
           placeholder = "Password"
           onChange ={event => this.setState(byPropKey('passwordOne', event.target.value))}
         />
         <input
           type="password" id="passwordTwo"
           value = {passwordTwo}
           placeholder = "Confirm password"
           onChange ={event => this.setState(byPropKey('passwordTwo', event.target.value))}
         />
         <button disabled = {isInvalid} type="submit">
           Sign Up
         </button>

         { error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(signUpPage)

export {
  SignUpForm
}
