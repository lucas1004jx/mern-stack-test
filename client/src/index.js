import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  createStore, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'util/Reducers';
import './index.css';
import App from './App';

// Middleware and store enhancers
const enhancers = [
  applyMiddleware(thunk),
];

const initialStore = createStore(rootReducer, { }, compose(...enhancers));

ReactDOM.render(<App store={initialStore} />, document.getElementById('root'));
