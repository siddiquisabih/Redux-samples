import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from "redux"
import { Provider } from "react-redux"


function reducer(state, action) {
  switch (action.type) {
    case "sabih":
      return "sabih siddiqui"
  }

}



function sidd() {
  store.dispatch({
    type: "sabih"
  })


}

let store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState())
})


// store.dispatch({

//   type: "sabih"
// })


ReactDOM.render(

  <Provider store={store}>
    <div>
      <App />
      <button onClick={sidd
      }>click to update</button>

    </div>
  </Provider>,
  document.getElementById('root')
);
