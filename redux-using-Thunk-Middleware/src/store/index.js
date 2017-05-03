import {createStore} from "redux"
import {combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"


import firstReducer from "./reducer/Reducers"
import SecondRed from "./reducer/secondRed"

let middleware = applyMiddleware(thunk);

let mainReducer = combineReducers({
    firstReducer ,
    SecondRed
})
let store = createStore(mainReducer , middleware);

store.subscribe(()=>{
    console.log(store.getState())

}
)


export default store