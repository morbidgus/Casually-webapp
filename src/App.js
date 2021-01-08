import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/signin-signup/signin-signup';
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
