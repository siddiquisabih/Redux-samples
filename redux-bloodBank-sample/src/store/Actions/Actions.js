class Actions {

    static signup = "Signup"
    static login = "Login"
    static getData = "gettingData"
    static signout = "Signout"
    static sentData = "dataSent"
    static error = "Error"

    static signupAction() {
        return {
            type: Actions.signup
        }
    }

    static loginAction() {
        return {
            type: Actions.login
        }
    }

    static sentDataAction() {
        return {
            type: Actions.sentData
        }
    }

    static gettingDataAction(value) {
        return {
            type: Actions.getData,
            data: value
        }
    }

    static signoutUser() {
        return {
            type: Actions.signout
        }
    }
}


export default Actions;