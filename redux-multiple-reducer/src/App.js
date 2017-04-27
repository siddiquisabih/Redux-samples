import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterAction from "./store/Actions/CounterAction"
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {

    incState: state.incrementCounter,
    decState: state.decrementCounter
  }
}

function mapDispatchToProps(dispatch) {
  return {

    incValue: () => {
      return dispatch(CounterAction.Increment())
    },

    decValue: () => {
      return dispatch(CounterAction.Decrement())
    }
  }
}
class App extends Component {

  render() {
    return (
      <div >
        redux state is

        {this.props.incState + this.props.decState}

        <br />
        <button onClick={this.props.incValue}>
          Increment value
            </button>

        <br />

        <button onClick={this.props.decValue}> Decrement Value</button>

        <br />



      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
