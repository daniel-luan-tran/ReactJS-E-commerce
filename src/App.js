import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';

const Shop = () => {
  return (
    <div>
      <h1>Hello World!!!!!</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<HomePage/>} />
            <Route path="shop" element={<Shop/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
