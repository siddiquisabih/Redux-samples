import React, { Component } from "react"


class Select extends Component {



    selectItem(ev) {
        ev.preventDefault()
        let bloodSelected = this.refs.blood.value
        console.log(bloodSelected)
    }



    render() {
        return (

            <div>
                <form>
                    Blood Group
        <select ref="blood">
                        <option selected disabled > Select Your Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={this.selectItem.bind(this)}>Get List</button>
                </form>
            </div>


        );
    }
}
export default Select