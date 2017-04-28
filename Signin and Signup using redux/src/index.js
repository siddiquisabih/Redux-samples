import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import { Provider } from "react-redux"
import store from "./store"
import * as firebase from "firebase"

// Initialize Firebase
var config = {
  
//data base link and configuration go here


};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>
  ,
  document.getElementById('root')
);
