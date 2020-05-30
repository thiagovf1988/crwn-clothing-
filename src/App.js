import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, link } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'




function App() {
  return (
    <div>
      <Header /> {/* // this is great because the header will always be rendered dispait pop ups, or different content inside the swith below ... 
    the app stays intuited and the header is always present */}
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />


      </Switch>

    </div>
  );
}

export default App;
