class Actions {

    static write = "write"





    static actionType(text) {
        return {
            type: Actions.write,
            value: text

        }
    }
}

export default Actions
