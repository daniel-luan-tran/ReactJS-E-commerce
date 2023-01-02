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
import { auth, onAuthStateChangedHandler, createUserDocumentFromAuth, getCategoriesAndDocuments } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from './store/user/user.action';
import { userReducer } from './store/user/user.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IsExist } from './luan-library/check-exist-library';
import { setCategoryMap, setCurrentProduct, setCurrentProductArray } from './store/product/product.action';
import { fetchProductAsyncReduxThunk } from './store/product/product.selector';
import { setCurrentNavigation } from './store/navigation/navigation.action';
import { selectCategoryMap } from './store/product/product.selector';
import { setCurrentCartCount, setCurrentCartItems } from './store/cart/cart.action';

function App() {
  const {products} = useContext(ProductContext);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger
    const unsubscribe = onAuthStateChangedHandler((_user) => {
        if (_user) {
            const x =createUserDocumentFromAuth(_user);
        }
        dispatch(setCurrentUser(_user));
    });
    
    return unsubscribe;
  }, []);
  const currentUser = useSelector((state) => {
    debugger
    return state.user.currentUser
  })

  useEffect(() => {
      fetchProductAsyncReduxThunk(dispatch);
  }, []);
  const currentProduct = useSelector((state) => {
    return state.product.currentProduct
  })
  const currentProductArray = useSelector((state) => {
    return state.product.currentProductArray
  })
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation user={currentUser} />}>
            <Route index element={<HomePage currentProductArray={currentProductArray} />} />
            <Route path="shop" element={<Shop currentProductArray={currentProductArray} currentProduct={currentProduct} />} />
            <Route path="auth" element={<Auth/>} />
            {
              IsExist(currentProduct) &&
              Object.entries(currentProduct).map((item) => {
                  const category = item[0];
                  return <Route key={category} path={`shop/${category}`} element={<Shop categorySelected={category} currentProductArray={currentProductArray} currentProduct={currentProduct} />} />
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
