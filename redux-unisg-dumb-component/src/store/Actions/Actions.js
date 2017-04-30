class Action{

static increment = "Inc"
static decrement = "Dec"




static incrementValue(){
    return{
    type : Action.increment
}}


static decrementValue(){
  return{  type : Action.decrement
}}


}
export default Action