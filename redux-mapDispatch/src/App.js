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
    }
  }
}

class App extends Component {
  render() {
    return (
      <div >
        {this.props.value}
        <br />
        <div>
          <br />

          <button onClick={this.props.sidd}>

            update from App Component

        </button>
        </div>



      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
