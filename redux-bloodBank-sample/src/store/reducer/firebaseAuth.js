import Actions from "../Actions/Actions"

const initialState = {
    Signup: "false",
    login: "false",
    rigister: "false",
    sentData: "false",
    getData: "false",
    dataArray: [],
    signout: "false",
    sendDataSucess: "false",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.signup:
            return Object.assign({}, initialState, { Signup: "true", rigister: "true" })

        case Actions.login:
            return Object.assign({}, state, { login: "true", rigister: "true" })

        case Actions.sentData:
            return Object.assign({}, state, { sentData: "true" })

        case Actions.getData:
            return Object.assign({}, state, { getData: "true", dataArray: action.data })

        case Actions.signout:
            return Object.assign({}, state, { signout: "true" })

        default:
            return state

    }
}



export default authReducer