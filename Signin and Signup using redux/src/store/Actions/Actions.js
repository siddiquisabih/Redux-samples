class Actions {

    static signup = "Signup"
    static login = "Login"

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

}



export default Actions;