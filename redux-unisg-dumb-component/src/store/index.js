import {createStore} from "redux"
import {combineReducers} from "redux"

import firstReducer from "./reducer/Reducers"
import SecondRed from "./reducer/secondRed"


let mainReducer = combineReducers({
    firstReducer ,
    SecondRed
})


let store = createStore(mainReducer);

store.subscribe(()=>{
    console.log(store.getState())

}
)


export default store