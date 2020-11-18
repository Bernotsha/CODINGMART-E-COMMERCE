import React from 'react'

class Preview_Color extends React.Component{
    render(){
        return(
            <label for={this.props.labelfor}>
            <input type="radio" name="color__radio" id={this.props.id} checked/>
            <span class="checkmark"></span>
        </label>
        )
    }
}
export default Preview_Color