import React, { Component } from 'react';
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"

// import Actions from "../../store/Actions/Actions"
import { browserHistory } from "react-router"
import {TextField , RaisedButton} from "material-ui"
// import * as MUI from "material-ui"
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
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue(),
        }

        console.log(emailAndPass)
        this.props.userDetail(emailAndPass)
    }

    render() {
        return (
            <div>



<TextField type= "text" hintText="Email"  ref="email" floatingLabelText="Email"/><br/>
<TextField  type = "password"   hintText="Password" ref="pass" floatingLabelText="Password"/><br/>
<RaisedButton  primary={true} onClick={this.SignupMethod.bind(this)}>
Signup
</RaisedButton>

              


               

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);




{

//  <input type="text" placeholder="Email" ref="email" defaultValue="s@m.com" /><br />
//                 <input type="password" placeholder="password" ref="pass" defaultValue="sabihsiddiqui" /><br />

                // <input onClick={this.SignupMethod.bind(this)} type="button" value="Signup" />


}