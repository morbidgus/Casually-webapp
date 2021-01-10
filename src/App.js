import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signin-signup/signin-signup';
import Header from './components/header/header'

import { auth } from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );

  }

}

export default App;
