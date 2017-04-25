import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from "redux"
import { Provider } from "react-redux"
import store from "./store"


function sidd() {
  store.dispatch({
    type: "Inc"
  })


}


ReactDOM.render(

  <Provider store={store}>
    <div>
      <App />



      <button onClick={sidd
      }>update from Index File </button>



      
    </div>
  </Provider>,
  document.getElementById('root')
);
