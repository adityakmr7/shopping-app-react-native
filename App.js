import React from 'react';
import ShopNaviation from './naviation/ShopNaviation';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/product';


const rootReducer = combineReducers({
  products: productReducer
});


const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNaviation/>
    </Provider>
  );
}


