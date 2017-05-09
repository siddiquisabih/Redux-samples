import React, { Component } from "react"

import { Route, Router, browserHistory } from "react-router"
import Form from "../Donor/DonorForm"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import List from "../DonerList/List"
import Signout from "../Signout/signout"
import Design from "../../Component/Material/AppBarDesign"
import Home from "../../Component/Material/Home"

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/donorForm" component={Form} />
                <Route path="/donorList" component={List} />
                <Route path="/logout" component={Signout} />
                <Route path="/home" component={Design} />
            </Router>
        );
    }
}
export default Routes