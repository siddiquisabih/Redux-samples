import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"


function mapStateToProps(state) {
    return {
        listState: state.dataArray
    }
}
function mapDispatchToProps(dispatch) {
    return {

        getList: () => {
     dispatch(Firebase.fetchDataFromFirebase())
    }}
}

class List extends Component {
    render() {
        return (
                <div>
                <button onClick={this.props.getList}>Get Data </button>
<div>
        {this.props.listState.map((m, v) => {
          return (
            <div key={v}>
              <label>User Name : </label>
              <span>{m.name} </span>  <br />
              <label>Address : </label>
              <span>{m.address} </span><br />
              <label>Blood Group : </label>
              <span>{m.blood} </span><br />
              <label>Contact Number : </label>
              <span>{m.number} </span><br />
              <label>Date Of Birth : </label>
              <span>{m.date} </span><br />
              <br /><br />
            </div>
          )
        })}
      </div>
            </div>
        );
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(List);



