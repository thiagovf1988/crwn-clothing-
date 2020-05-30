import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, link } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'




function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />


      </Switch>

    </div>
  );
}

export default App;
