import React , {Component} from "react"
import {AppBar , TextField, RaisedButton} from "material-ui"
import  { Link } from "react-router"

import * as MUI from "material-ui"

let style ={
    margin : 14
}

const Bar = () => (
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

export default Bar;