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
import { NavigationProvider } from './components/contexts/navigation.context';
import { CategoryProvider } from './components/contexts/category.context';
import { SearchProvider } from './components/contexts/search.context';
import {Provider} from "react-redux";
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingV3 } from './components/loading/loading-v3.component';

ReactDOM.render(
  <React.StrictMode>
    <NavigationProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {/* <UserProvider> */}
          {/* <SearchProvider> */}
            {/* <ProductProvider> */}
              {/* <CategoryProvider> */}
                {/* <CartProvider> */}
                  <App />
                {/* </CartProvider> */}
              {/* </CategoryProvider> */}
            {/* </ProductProvider> */}
          {/* </SearchProvider> */}
        {/* </UserProvider> */}
        </PersistGate>
      </Provider>
    </NavigationProvider>
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
