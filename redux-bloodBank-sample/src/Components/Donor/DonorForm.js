import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"
import { Link } from "react-router"

import {DropDownMenu ,MenuItem ,  TextField} from 'material-ui'


function mapStateToProps(state) {
    return {
        donorState: state.sentData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendingData: (userInfo) => {
            dispatch(Firebase.sendingDataToFirebase(userInfo))
        }
    }
}

class Form extends Component {
     constructor(props) {
    super(props);
    this.state = {values: 1};
  }

  handleChange = (values) => this.setState({values});


    submit() {
        const donorInfo = {
            name: this.refs.name.getValue(),
            address: this.refs.address.getValue(),
            blood: this.refs.selectedValue.value,
            number: this.refs.number.getValue(),
            date: this.refs.dob.value
        }
        let userDetail = {
            donorInfo
        }

        this.props.sendingData(userDetail)

        // console.log(userDetail)

    }

    render() {
        return (
            <div>
                
                <TextField  ref="name" type="text" floatingLabelText="Name"  /><br />
                <TextField  ref="address" type="text" floatingLabelText="Address"  /><br />
                <TextField  ref="number" type="text" floatingLabelText="Number" /><br /><br />



                <select ref="selectedValue">
                    <option selected disabled>Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select><br />


                <input type="date" placeholder="Date Of Birth" ref="dob" /><br />
                
                <Link to="/donorList">   <input type="button" onClick={this.submit.bind(this)} value="Submit" /></Link><br />

            </div>



        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);




{

//  <input type="text" placeholder="Name" ref="name" /><br />
//                 <input type="text" placeholder="Address" ref="address" /><br />
//                 <input type="text" placeholder="Contact Number" ref="number" /><br />



}