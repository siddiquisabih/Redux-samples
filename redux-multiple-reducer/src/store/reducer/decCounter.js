import CounterAction from "../Actions/CounterAction"

function decrementCounter(state = 0, action) {
    switch (action.type) {
        case CounterAction.decrement:
            return state - 1

        default:
            return state

    }
}
export default decrementCounter