import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"
import { browserHistory } from "react-router"

import { TextField, RaisedButton , Paper } from "material-ui"

const style = {
  height: 200,
  width: 550,
  margin: 200,
  textAlign: 'center',
  display: 'inline-block',
};

function mapStateToProps(state) {
    return {

        loginState: state.login

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


    componentWillReceiveProps(prop) {
        if (prop.login !== false) {
            browserHistory.push('/home')        
    }}

    loginUser() {
        let emailAndPass = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
        this.props.loginMethod(emailAndPass)
    }

    render() {
        return (
            <div>


            <Paper style={style} zDepth={5} rounded={false}>


                <TextField type="text" hintText="Email" ref="email" floatingLabelText="Email" /><br />
                <TextField type="password" hintText="Password" ref="pass" floatingLabelText="Password" /><br />
                <RaisedButton primary={true} onClick={this.loginUser.bind(this)}>
                    Login
</RaisedButton>
</Paper>


            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
