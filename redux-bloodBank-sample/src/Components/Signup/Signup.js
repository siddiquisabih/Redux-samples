import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"

// import Actions from "../../store/Actions/Actions"
import { browserHistory } from "react-router"



function mapStateToProps(state) {
    return {
        inistate: state.rigister
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

    componentWillReceiveProps(prop) {
        if (prop.rigister !== false) {
            browserHistory.push('/login')
        }

    }

    SignupMethod() {
        let emailAndPass = {
            email: this.refs.email.value,
            pass: this.refs.pass.value,

        }
        console.log("state", this.props.inistate)
        this.props.userDetail(emailAndPass)
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Email" ref="email" defaultValue="s@m.com" /><br />
                <input type="password" placeholder="password" ref="pass" defaultValue="sabihsiddiqui" /><br />
                <input onClick={this.SignupMethod.bind(this)} type="button" value="Signup" />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);