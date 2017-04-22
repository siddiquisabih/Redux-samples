import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"





function mapStateToProps(state) {
  return {
    name: state,
    
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.name}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
