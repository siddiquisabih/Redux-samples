import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {

        loginState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginMethod: (userIdPass) => {
            dispatch(Firebase.signinUserMethod(userIdPass))
        }
    }
}

class Login extends Component {
    constructor() {
        super()
        this.loginUser = this.loginUser.bind(this)
    }

    loginUser() {
        let emailAndPass = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        this.props.loginMethod(emailAndPass)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Email" ref="email" defaultValue="s@m.com" /><br />
                <input type="password" placeholder="password" ref="pass" defaultValue="sabihsiddiqui" /><br />
                <input type="button" onClick={this.loginUser} value="Login" />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);