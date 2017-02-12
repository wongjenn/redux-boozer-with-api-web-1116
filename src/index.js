import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { Provider } from 'react-redux'
import cocktailsReducer from './reducers/cocktails_reducer'
import currentCocktailReducer from './reducers/current_cocktail_reducer'
import rootReducer from './reducers'
import App from './components/app'


const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
  <App  />
</Provider>
, document.getElementById('container'));
