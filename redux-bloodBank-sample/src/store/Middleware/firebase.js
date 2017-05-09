import * as firebase from "firebase"
import Actions from "../Actions/Actions"
class Firebase {

    static SignupUserMethod(userInfo) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userInfo.email, userInfo.pass).then(() => {
                dispatch(Actions.signupAction())
            })
        }
    }

    static signinUserMethod(userIdPass) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userIdPass.email, userIdPass.pass).then(() => {
                dispatch(Actions.loginAction())
            })
        }
    }

    static sendingDataToFirebase(data) {
        return (dispatch) => {
            let database = firebase.database().ref().child("dataUsingRedux");
            database.push(data);
            dispatch(Actions.sentDataAction())
        }
    }

    static fetchDataFromFirebase() {
        return (dispatch) => {
            let arrdata = []
            let database = firebase.database().ref("/dataUsingRedux/");
            database.on('value', (object) => {
                let data = object.val();
                for (var a in data) {
                    arrdata.push(data[a].donorInfo);
                }
                dispatch(Actions.gettingDataAction(arrdata));
            });
        }
    }

    static logoutUser() {
        return (dispatch) => {

            let auth = firebase.auth();
            auth.signOut().then(() => {
            })
            dispatch(Actions.signoutUser())
        }
    }
}
export default Firebase;