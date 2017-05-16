import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Actions from "../store/Actions/Action"


function mapStateToProps(state) {
    return {

        text: state.newValue

    }
}


function mapDispatchToProps(dispatch) {
    return {

        textfunc: (text) => {


            dispatch(Actions.actionType(text))

        }


    }


}



class App extends Component {


    submit() {
        let text = this.refs.text.value

        this.props.textfunc(text)

    }



    render() {
        return (
            <div>

                {this.props.text}
                <br />
                <input type="text" ref="text" />
                <br />

                <button onClick={this.submit.bind(this)}>click me</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
