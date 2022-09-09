import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route  path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
