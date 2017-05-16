import {createStore} from "redux"

import reducer from "../store/reducer/functions"






let store = createStore(reducer)



store.subscribe(()=>{
    console.log(store.getState())
})


export default store