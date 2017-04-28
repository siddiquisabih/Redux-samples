import React, { Component } from 'react';
import './App.css';
import Action from "../store/Actions/Actions"
import {connect} from "react-redux"


function mapStateToProps(state){
    return {

incState : state.firstReducer.value ,
decState : state.SecondRed.age

    }
}

function mapDispatchToProps(dispatch){
    return{

        incMethod: ()=>{
            return dispatch(Action.incrementValue())
        },
        decMethod : ()=>{
           return dispatch(Action.decrementValue())
        }
        
    }
}



class App extends Component {
    render() {
        return (
            <div>
                {this.props.incState + this.props.decState}<br/>
                <button onClick={this.props.incMethod}> Increment</button>
                <button onClick={this.props.decMethod}> Decrement</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
