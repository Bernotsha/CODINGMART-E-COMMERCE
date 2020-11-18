import React from 'react'

class Previewsize extends React.Component{
    render(){
        return(
            <label for={this.props.labelfor} class={this.props.class}>
                <input type="radio" id={this.props.id}/>
                {this.props.size}
            </label>

        )
    }
}
export default Previewsize