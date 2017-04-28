import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login"
import Signup from "./Signup/Signup"

class App extends Component {
    render() {
        return (
            <div>

            
            <Login/> 
            <Signup/>

            </div>
        );
    }
}

export default App;
