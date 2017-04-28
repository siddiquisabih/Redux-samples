import Actions from "../Actions/Actions"

const initialState = {
    Signup: "false",
    login : "false"
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.signup:
            return Object.assign({}, initialState, { Signup: true })

case Actions.login : 
return Object.assign({}, state , {login : "true"})


    }
}

export default authReducer