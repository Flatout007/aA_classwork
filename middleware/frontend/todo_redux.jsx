import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import { applyMiddleware } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const newTodos = [{ id: 1 }];

  // addLoggingToDispatch(store)({
  //   type: 'RECEIVE_TODOS',
  //   todos: newTodos
  // });
  store.dispatch = addLoggingToDispatch(store)
  //store.dispatch({})

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

const addLoggingToDispatch = (store) => {
  let odispatch = store.dispatch;

  return function(action) {
    console.log(store.getState());
    console.log(action);
    odispatch(action);
    console.log(store.getState());
  }
}

// const addLoggingToDispatch = (store) => {
  
//   return function(next) {
//     return function(action) {
//       return function applyMiddleware() {

//       }
//     }
//   }
// }
