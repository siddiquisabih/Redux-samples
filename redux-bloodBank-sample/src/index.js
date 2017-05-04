import React from 'react';
import ReactDOM from 'react-dom';
// import Signup from './Components/Signup/Signup';
import './index.css';
import { Provider } from "react-redux"
import store from "./store"
import * as firebase from "firebase"
import Routes from "./Components/Router/Routes"



// Initialize Firebase


ReactDOM.render(
  <Provider store={store}>

    <Routes />

  </Provider>
  ,
  document.getElementById('root')
);
