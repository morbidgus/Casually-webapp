import React from 'react';

import './signin-signup.styles.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInSignUp = () =>(
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUp;