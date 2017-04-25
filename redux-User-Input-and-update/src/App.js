import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
    value: state

  }
}

function mapDispatchToProps(dispatch) {
  return {
    sidd: () => {
      dispatch({
        type: 'Inc'

      })
    },



    adding: (value) => {
      return dispatch({
        type: 'Inc_with_user_input', val: value


      })

    }


  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }



  valueChange(event) {
    this.setState({
      count: parseInt(event.target.value)
    });
  }

  handel() {
    this.props.adding(this.state.count);
  }

  render() {
    return (
      <div >
        redux state is

        {this.props.value}

        <br />
        component state

        {this.state.count}

        <br />

        <div>

          <input type="text" onChange={this.valueChange.bind(this)} />

          <br />

          <button onClick={this.props.sidd}>
            update from App Component

        </button>

          <br />

          <button onClick={this.handel.bind(this)}>update from user input  </button>

        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
