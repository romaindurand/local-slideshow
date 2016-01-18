import React from 'react';
import reducer from '../reducers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import isDev from 'isdev';
import DevTools from './devtools';

const middlewares = isDev ?
  [DevTools.instrument()] :
  [];
const finalCreateStore = compose(...middlewares)(createStore);

var initialize = (initialState = {}) => {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};

export default initialize;