import Actions from "../Actions/Actions"

const initialState = {
    Signup: "false",
    login: "false",
    rigister: "false",
    sentData: "false",
    getData: "false",
    dataArray : []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.signup:
            return Object.assign({}, initialState, { Signup: "true", rigister: "true" })

        case Actions.login:
            return Object.assign({}, state, { login: "true" })

        case Actions.sentData:
            return Object.assign({}, state, { sentData: "true" })

        case Actions.getData:
            return Object.assign({}, state, { getData: "true" , dataArray : action.data })


        default:
            return state

    }
}



export default authReducer