import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import 'redux-thunk';
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer,  applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);