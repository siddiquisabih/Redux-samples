class CounterAction {

    static increment = "Increment";
    static decrement = "Decrement";




    static Increment() {
        return {
            type: CounterAction.increment
        }
    }

    static Decrement() {
        return {
            type: CounterAction.decrement
        }
    }




}
export default CounterAction