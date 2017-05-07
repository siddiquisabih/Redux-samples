import React  from "react"
import {AppBar , RaisedButton} from "material-ui"
import  { Link } from "react-router"

// import * as MUI from "material-ui"

let style ={
    margin : 14
}

const Home = () => (
  <AppBar
    title="Blood Bank">

  <Link to="/signup"> <RaisedButton  primary={true} style={style}>
   signup
  </ RaisedButton>
  </Link>

  
  <Link to="/login"> <RaisedButton primary={true} style={style}>
   Login
  </RaisedButton>
  </Link>
  </AppBar>
);
export default Home;