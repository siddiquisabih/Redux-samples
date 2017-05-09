import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store"
import * as firebase from "firebase"
import Routes from "./Container/Router/Routes"
import { MuiThemeProvider } from "material-ui"
import injectTapEventPlugin from 'react-tap-event-plugin';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
  authDomain: "bloodbank-876e1.firebaseapp.com",
  databaseURL: "https://bloodbank-876e1.firebaseio.com",
  projectId: "bloodbank-876e1",
  storageBucket: "bloodbank-876e1.appspot.com",
  messagingSenderId: "560849097238"
};
firebase.initializeApp(config);
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);