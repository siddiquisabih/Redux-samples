import React , {Component} from "react"
import {AppBar , RaisedButton} from "material-ui"
import {Link} from "react-router"
let style ={
    margin : 14
}

class Design extends Component{
render(){
    {console.log(this.props)}
    return(

  <AppBar title="Blood Bank">

  <Link to="/donorForm"> <RaisedButton primary={true} style={style}>
   Donate 
  </RaisedButton>
  </Link>

  <Link to="/donorList"> <RaisedButton primary={true} style={style} onClick={this.props.list}>
   Get Blood 
  </RaisedButton>
  </Link>

  <Link to="/"> <RaisedButton primary={true} style={style}>
   Signout
  </RaisedButton>


  </Link>

  </AppBar>




    );
}
}
export default Design;