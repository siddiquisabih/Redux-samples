import React  from "react"
import {AppBar , RaisedButton} from "material-ui"
import  { Link } from "react-router"

let style ={
    margin : 14
}

let image ={
height : 578,
width : 1350
}

const Home = () => (
<div>
  <AppBar
    title="Blood Bank"  showMenuIconButton={false}>

  <Link to="/signup"> <RaisedButton  primary={true} style={style}>
   Signup
  </ RaisedButton>
  </Link>
  
  <Link to="/login"> <RaisedButton primary={true} style={style}>
   Login
  </RaisedButton>
  </Link>
  </AppBar>

<img src="http://shergee.com/images/Chance-at-Life-Email-Banner.jpg" alt="" style={image}/>

</div>


);
export default Home;