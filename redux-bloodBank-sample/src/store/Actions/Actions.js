class Actions {

    static signup = "Signup"
    static login = "Login"
    static getData = "gettingData"

    static sentData = "dataSent"

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
            data : value
            
        }
    }




}


export default Actions;