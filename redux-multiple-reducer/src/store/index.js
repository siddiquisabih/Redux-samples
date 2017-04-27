import { createStore } from "redux"
import incrementCounter from "./reducer/counter"
import { combineReducers } from "redux"
import decrementCounter from "./reducer/decCounter"

let mainReducer = combineReducers({
  incrementCounter,
  decrementCounter
})

let store = createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState())
})

export default store