import Action from "../Actions/Actions"
const initialState ={
    value : 0
}

function firstReducer(state = initialState, action ){
    switch(action.type){
        case Action.increment :
        return Object.assign({} , state , {value : state.value + 1})

        default :
        return state;
    }
}
export default firstReducer