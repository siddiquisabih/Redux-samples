import Action from "../Actions/Actions"

const initialState={
    age :0,
}


function SecondReducer(state = initialState , action){
switch (action.type){
    case Action.decrement:
    return Object.assign({},state,{age : state.age - 1})

default :
        return state;


}



}
export default SecondReducer