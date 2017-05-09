import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"
import { browserHistory } from "react-router"
import { TextField, Paper, MenuItem, DropDownMenu, RaisedButton } from 'material-ui'
import Design from "../../Component/Material/AppBarDesign"


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
        this.state = { value: 1 };
    }

    componentWillReceiveProps(prop) {
        if (prop.sentData !== false) {

            alert("Thank You")
            browserHistory.push("/home")

        }
    }
    // console.log(prop)


    changeVaue = (event, index, value) => {
        this.setState({
            value
        });
    }

    submit() {
        const donorInfo = {
            name: this.refs.name.getValue(),
            address: this.refs.address.getValue(),
            blood: this.state.value,
            number: this.refs.number.getValue(),
            email: this.refs.email.getValue()
        }
        console.log(donorInfo, "information")
        let userDetail = {
            donorInfo
        }
        this.props.sendingData(userDetail)
    }

    render() {
        return (
            <div>
                <Design />

                <Paper zDepth={5} rounded={false} style={style}>

                    <TextField ref="name" type="text" floatingLabelText="Name" required /><br />
                    <TextField ref="address" type="text" floatingLabelText="Address" /><br />
                    <TextField ref="number" type="number" floatingLabelText="Number" disabled={false} /><br /><br />
                    <TextField ref="email" type="text" floatingLabelText="Email" /><br />


                    <DropDownMenu value={this.state.value} onChange={this.changeVaue}>

                        <MenuItem value={1} disabled={true} primaryText="Blood Group" />
                        <MenuItem value="A+" primaryText="A+" />
                        <MenuItem value="A-" primaryText="A-" />
                        <MenuItem value="B+" primaryText="B+" />
                        <MenuItem value="B-" primaryText="B-" />
                        <MenuItem value="AB+" primaryText="AB+" />
                        <MenuItem value="AB-" primaryText="AB-" />
                        <MenuItem value="O-" primaryText="O+" />
                        <MenuItem value="O-" primaryText="O-" />
                    </DropDownMenu>
                    <br />

                    <RaisedButton label="Submit" primary={true} onClick={this.submit.bind(this)}>
                    </RaisedButton>

                </Paper>
            </div>



        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
