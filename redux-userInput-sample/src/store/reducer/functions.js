import React ,{Component} from "react"

import Actions from "../Actions/Action"


let textMessage ="false"
let newValue = []



function reducer(state = textMessage , action){
switch(action.type){

    case Actions.write :
    return Object.assign({} , state , {textMessage : true , newValue : action.value})


default :
return state


}



}

export default reducer;