import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"
import { browserHistory } from "react-router"
import { TextField, RaisedButton, Paper } from "material-ui"

const style = {
    height: 200,
    width: 550,
    margin: 200,
    textAlign: 'center',
    display: 'inline-block',
};

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

            alert("Welcome To Blood Bank")
            browserHistory.push('/login')
        }
    }
    SignupMethod() {

        let emailAndPass = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue(),
        }
        // console.log(emailAndPass)
        this.props.userDetail(emailAndPass)
    }
    render() {
        return (
            <div>
                <Paper style={style} rounded={false} zDepth={5}>
                    <TextField type="text" hintText="Email" ref="email" floatingLabelText="Email" /><br />
                    <TextField type="password" hintText="Password" ref="pass" floatingLabelText="Password" /><br />
                    <RaisedButton primary={true} onClick={this.SignupMethod.bind(this)}>
                        Signup</RaisedButton>
                </Paper>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);




