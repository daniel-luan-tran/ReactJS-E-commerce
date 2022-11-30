import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {UserProvider, UserContext} from '../src/components/contexts/user.context';
import { ProductProvider } from './components/contexts/product.context';
import { CartProvider } from './components/contexts/cart.context';
import { ProductChosenProvider } from './components/contexts/productChosen.context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <ProductChosenProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductChosenProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
