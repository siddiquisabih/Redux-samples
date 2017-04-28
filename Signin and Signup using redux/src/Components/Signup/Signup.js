import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        inistate: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userDetail: (userData) => {
            dispatch(Firebase.SignupUserMethod(userData))
        }
    }
}

class Signup extends Component {
    constructor() {
        super()
        this.SignupMethod = this.SignupMethod.bind(this)
    }

    SignupMethod() {
        let emailAndPass = {
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        this.props.userDetail(emailAndPass)
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Email" ref="email" defaultValue="s@m.com" /><br />
                <input type="password" placeholder="password" ref="pass" defaultValue="sabihsiddiqui" /><br />
                <input onClick={this.SignupMethod} type="button" value="Signup" />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);