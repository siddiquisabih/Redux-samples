import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore} from "redux"
import reducer from "./store/reducer/Reducers"
import {Provider} from "react-redux"


let store = createStore(reducer)


store.subscribe(()=>{
    console.log("state" , store.getState())
})



ReactDOM.render(

<Provider store={store}>

    <App />
    </Provider>
    
    ,
    document.getElementById('root')
);
