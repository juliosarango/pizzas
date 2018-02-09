import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignUpLink = () => {
  return (
    <p>
       Do not have a account?
       {' '}
       <Link to ={ routes.SIGN_UP}>Sign Up </Link>
    </p>
  )
}

export default SignUpLink
