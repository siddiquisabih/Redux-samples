import { createStore, applyMiddleware } from "redux"
import authReducer from "../store/reducer/firebaseAuth"
import Firebase from "./Middleware/firebase"
import thunk from "redux-thunk"

let middleware = applyMiddleware(thunk)

let store = createStore(authReducer, middleware)

store.subscribe(() => {
    console.log("STORE CHANGED", store.getState())
})
export default store;