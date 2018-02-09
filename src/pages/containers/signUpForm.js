import React, { Component } from 'react';

class SignUpForm extends Component {

  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  };

  componentDidMount(){
    this.setState({
      ...state
    })
  }




  onSubmit = (event) => {

  }

  render() {
    return (
      <form onSubmit = {this.onSubmit} >
         <input type="text" id="username" />
      </form>
    );
  }
}

export default SignUpForm
