import React from 'react';
import ShopNaviation from './naviation/ShopNaviation';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import productReducer from './store/reducers/product';
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';


const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <ShopNaviation/>
    </Provider>
  );
}


