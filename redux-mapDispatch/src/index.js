import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from "redux"
import { Provider } from "react-redux"


function reducer(state = 0, action) {
  switch (action.type) {
    case "Inc":
      return state + 1

  }

}

let store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState())
})


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
      }>click to update </button>

    </div>
  </Provider>,
  document.getElementById('root')
);
