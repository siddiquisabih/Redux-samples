import Actions from "../Actions/Actions"


let initialState = {

    Array : [],
    write : "false"
}


function reducer(state = initialState , action){
 switch(action.type){

case Actions.writeText : 
return Object.assign({} , state , {Array : action.value , write : "true"})

default :
return state

}

}
export default reducer;
    