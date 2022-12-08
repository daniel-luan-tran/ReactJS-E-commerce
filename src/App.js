import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import { Auth } from './components/authentication/auth.component';
// import SignIn from './components/sign-in/sign-in.component';
// import { SignUp } from './components/sign-up/signup.component';
import HomePage from './components/homepage/homepage.component';
import { Shop } from "./components/shop/shop.component";
import Checkout from './components/check-out/check-out.component';
import { ProductContext } from './components/contexts/product.context';
import { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChangedHandler, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from './store/user/user.action';
import { userReducer } from './store/user/user.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IsExist } from './luan-library/check-exist-library';

function App() {
  const {products} = useContext(ProductContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHandler((_user) => {
        if (_user) {
            const x =createUserDocumentFromAuth(_user);
        }
        dispatch(setCurrentUser(_user));
        
    });
    
    return unsubscribe;
  }, []);
  const currentUser = useSelector((state) => {
    return state.user.currentUser
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation user={currentUser} />}>
            <Route index element={<HomePage/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="auth" element={<Auth/>} />
            {
              IsExist(products) &&
              Object.entries(products).map((item) => {
                  const category = item[0];
                  return <Route key={category} path={`shop/${category}`} element={<Shop categorySelected={category} />} />
              })
            }
            <Route path="checkout" element={<Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
