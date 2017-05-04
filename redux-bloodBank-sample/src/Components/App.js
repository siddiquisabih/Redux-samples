import React, { Component } from 'react';
import {Link} from "react-router"

class App extends Component {
    
    
    
    select(){
        
        let userSelect = {
            bloodSelected : this.refs.blood
        }

console.log(userSelect)

    }
    
    
    render() {
        return (
            <div>

Blood Bank

<br/>

        <Link to="/signup">  <button>
        Signup</button></Link>

        <Link to="/login"><button>
        Login</button></Link>


{this.props.children}

         
          { //<Signup/>
        // <Link to="donorlist">  <button>
        // Click to Donor List
        // </button></Link>
    }
            </div>
        );
    }
}

export default App;


//data send karwana hai database mai ub..