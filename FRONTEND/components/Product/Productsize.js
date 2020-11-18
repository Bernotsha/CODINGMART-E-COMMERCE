import React from 'react'

class Productsize extends React.Component{
    render(){
        return(
            <label for={this.props.labelfor}>
            {this.props.attribute}
            <input type="checkbox" id={this.props.id}/>
            <span class="checkmark"></span>
        </label>

        )
    }
}
export default Productsize