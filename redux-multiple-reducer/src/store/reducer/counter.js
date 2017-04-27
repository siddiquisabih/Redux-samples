import CounterAction from "../Actions/CounterAction"


function incrementCounter(state = 0, action) {
  switch (action.type) {
    case CounterAction.increment:

      return state + 1;


    default:
      return state

  }
}

export default incrementCounter