import * as firebase from "firebase"
import Actions from "../Actions/Actions"
class Firebase {

    static SignupUserMethod(userInfo) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userInfo.email, userInfo.pass).then(() => {
                console.log("hogya");
                dispatch(Actions.signupAction())
            })
        }
    }

    static signinUserMethod(userIdPass) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userIdPass.email, userIdPass.pass).then(() => {
                console.log("Login done");
                dispatch(Actions.loginAction())
            })


        }
    }
}
export default Firebase;