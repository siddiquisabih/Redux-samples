import React, { Component } from "react"

import { Route, Router, browserHistory } from "react-router"
import App from "../App"
import Form from "../Donor/DonorForm"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import List from "../DonerList/List"
import Select from "../Selection/Select"


class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}></Route>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/donorForm" component={Form} />
                <Route path="/donorList" component={List} />
                <Route path="/selectList" component={Select} />
            </Router>
        );
    }
}

export default Routes