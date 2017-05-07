import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"
import { Link } from "react-router"
import { TextField,SelectField , DatePicker, Paper, MenuItem, DropDownMenu , RaisedButton } from 'material-ui'



const styles = {
  customWidth: {
    width: 150,
  },
};

const style = {
  height: 500,
  width: 550,
  margin: 200,
  textAlign: 'center',
  display: 'inline-block',
};




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


                <Paper zDepth={5} rounded={false} style={style}>

                    <TextField ref="name" type="text" floatingLabelText="Name" /><br />
                    <TextField ref="address" type="text" floatingLabelText="Address" /><br />
                    <TextField ref="number" type="text" floatingLabelText="Number" disabled={false} /><br /><br />





           
        <RaisedButton  label="Submit" primary={true} >
           </RaisedButton>
           
                </Paper>
            </div>



        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);


{



    // <select ref="selectedValue">
    //     <option selected disabled>Blood Group</option>
    //     <option value="A+">A+</option>
    //     <option value="A-">A-</option>
    //     <option value="B+">B+</option>
    //     <option value="B-">B-</option>
    //     <option value="AB+">AB+</option>
    //     <option value="AB-">AB-</option>
    //     <option value="O+">O+</option>
    //     <option value="O-">O-</option>
    // </select>
    // <br />

    // <input type="date" placeholder="Date Of Birth" ref="dob" /><br />
    // <Link to="/donorList">   <input type="button" onClick={this.submit.bind(this)} value="Submit" /></Link><br />




}