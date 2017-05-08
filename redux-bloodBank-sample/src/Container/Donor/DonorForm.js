import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"
import { Link } from "react-router"
import { TextField,SelectField , DatePicker, Paper, MenuItem, DropDownMenu , RaisedButton } from 'material-ui'
import Design from "../../Component/Material/AppBarDesign"

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
   
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  changeVaue = (event, index, value) => {
      this.setState({
      value
    });
  }

    submit() {
        const donorInfo = {
            name: this.refs.name.getValue(),
            address: this.refs.address.getValue(),
            // blood: this.refs.selectedValue.value,
            blood: this.state.value,
            number: this.refs.number.getValue(),
            // date: this.refs.dob.getDate()
            email: this.refs.email.getValue()
        }
        console.log(donorInfo , "information")
        let userDetail = {
            donorInfo
        }
        this.props.sendingData(userDetail)
    }

    render() {
        return (
            <div>
<Design/>

                <Paper zDepth={5} rounded={false} style={style}>
                    <TextField ref="name" type="text" floatingLabelText="Name" required/><br />
                    <TextField ref="address" type="text" floatingLabelText="Address" /><br />
                    <TextField ref="number" type="number" floatingLabelText="Number" disabled={false} /><br /><br />
                    <TextField ref="email" type="text" floatingLabelText="Email"  /><br /><br />
                   
                   
  <DropDownMenu value={this.state.value} onChange={this.changeVaue}>
            
          <MenuItem value={1} disabled={true} primaryText="Select Blood" />
          <MenuItem value="A+" primaryText="A+" />
          <MenuItem value="A-" primaryText="A-" />
          <MenuItem value="B+" primaryText="B+" />
          <MenuItem value="B-" primaryText="B-" />
          <MenuItem value= "AB+" primaryText="AB+" />
          <MenuItem value="AB-" primaryText="AB-" />
          <MenuItem value="O-" primaryText="O+" />
          <MenuItem value="O-"primaryText="O-" />
        </DropDownMenu>


        <RaisedButton  label="Submit" primary={true}  onClick={this.submit.bind(this)}>
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