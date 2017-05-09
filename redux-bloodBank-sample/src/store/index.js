import { createStore, applyMiddleware } from "redux"
import authReducer from "../store/reducer/firebaseAuth"
import thunk from "redux-thunk"

let middleware = applyMiddleware(thunk)
let store = createStore(authReducer, middleware)
store.subscribe(() => {
    console.log("store state ", store.getState())
})
export default store;