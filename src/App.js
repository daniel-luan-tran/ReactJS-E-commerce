import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import { Auth } from './components/authentication/auth.component';
// import SignIn from './components/sign-in/sign-in.component';
// import { SignUp } from './components/sign-up/signup.component';
import HomePage from './pages/homepage/homepage.component';
import { Shop } from "./components/shop/shop.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<HomePage/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="auth" element={<Auth/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
