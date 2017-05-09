import React, { Component } from "react"
import { connect } from "react-redux"
import Firebase from "../../store/Middleware/firebase"
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui"
import Design from "../../Component/Material/AppBarDesign"

function mapStateToProps(state) {
    return {
        listState: state.dataArray
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getList: () => {
            dispatch(Firebase.fetchDataFromFirebase())
        }
    }
}

class List extends Component {
    render() {
        return (
            <div>
                <Design list={this.props.getList} />
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                            <TableHeaderColumn>Number</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
                <div>

                    {this.props.listState.map((m, v) => {
                        return (

                            <Table key={v}>
                                <TableBody displayRowCheckbox={false} >
                                    <TableRow>
                                        <TableRowColumn>{m.name}</TableRowColumn>
                                        <TableRowColumn>{m.blood}</TableRowColumn>
                                        <TableRowColumn>{m.number}</TableRowColumn>
                                        <TableRowColumn>{m.email}</TableRowColumn>
                                        <TableRowColumn>{m.address}</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);