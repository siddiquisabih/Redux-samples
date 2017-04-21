import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



import { createStore } from 'redux'
function Sabih(state = 0, action) {
  switch (action.type) {
    case "sabih-plus":
      return "sabih siddiqui"

    case "sabih-multiply":
      return "siddiqui sabih"

    case "sabih-minus":
      return "siddiquisabih@gmail.com"

default :
return state;  

}
}

let store = createStore(Sabih)

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch({ type: "sabih-plus" })
store.dispatch({ type: "sabih-minus" })
store.dispatch({ type: "sabih-multiply" })




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
