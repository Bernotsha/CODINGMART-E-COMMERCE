import React from 'react'

class Preview_Checkbox extends React.Component{
    render(){
        return(
            <li>
            <span>{this.props.checkboxtext}</span>
            <div class={this.props.checkboxtype}>
                <label for={this.props.labelfor}>{this.props.labeltext}<input type={this.props.inputtype} id={this.props.inputid}/><span class="checkmark"></span></label>
            </div>
        </li>
        )
    }
}
export default Preview_Checkbox