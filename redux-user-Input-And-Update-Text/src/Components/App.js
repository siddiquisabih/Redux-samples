import React, { Component } from 'react';
import {connect} from "react-redux"
import Actions from "../store/Actions/Actions"

function mapStateToProps(state){
return{

    newState : state.Array

}
}


function mapDispatchToProps(dispatch){
    return{
        
        textMethod : (text)=>{
            console.log(text)

            dispatch(Actions.writemethod(text))
            
        }


    }
}





class App extends Component {
constructor(){
    super()
    this.state =  {
value : ""
    } 

}

changeValue(ev){

this.setState({
value : ev.target.value
})

}

method(){

let s = this.state.value
  this.props.textMethod(s)

}

    render() {
        return (
            <div>
you typed   :
{this.props.newState}


<br/>

<input type="text" onChange={this.changeValue.bind(this)}/><br/>

<button onClick={this.method.bind(this)}>click me</button>
<br/>
click this button to update value <br/>


            </div>
        );
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (App);
