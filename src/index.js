import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './Scss/Styles.css' ;
import {store} from './Container/redux/Store'
ReactDOM.render(
 <Provider  store = {store} >
  <App />
 </Provider> ,
document.getElementById('root'));