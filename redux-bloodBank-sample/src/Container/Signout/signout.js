import React, { Component } from "react"
import Firebase from "../../store/Middleware/firebase"
import { connect } from "react-redux"
import { browserHistory } from "react-router"

function mapStateToProps(state) {
    return {
        signout: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

        signout: () => {
            dispatch(Firebase.logoutUser())
        }
    }
}

class Signout extends Component {
    componentWillReceiveProps(logoutprop) {
        if (logoutprop.signout) {
            browserHistory.push("/")
        }
    }

    userSignout() {
        this.props.signout()
    }

    render() {
        return (
            <div>
                <button onClick={this.userSignout.bind(this)}>Signout</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signout)