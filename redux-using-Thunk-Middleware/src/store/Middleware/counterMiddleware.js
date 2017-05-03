import Action from "../Actions/Actions"
class CounterMiddle{


static CounterUpdate(){
return (dispatch)=>{
        dispatch(Action.incrementValue())
        

    }
}


}
export default CounterMiddle