import React  from "react"

import {Paper , TextField , RaisedButton} from "material-ui"

import Design from "../Material/AppBarDesign"
import {Link} from "react-router"


const style = {
  height: 350,
  width: 500,
  margin: 100,
  textAlign: 'center',
};




const ThankYou = () => (


<Paper zDepth={5} style={style} >  


<TextField   hintText="  ThankYou For Saving One Life "  />  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Link to="/home"> 
  <RaisedButton primary={true}>Click To Continue</RaisedButton>



</Link>


  </Paper>
  
  
);
export default ThankYou;