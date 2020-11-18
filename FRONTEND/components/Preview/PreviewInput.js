import React from 'react'

class PreviewInput extends React.Component{
    render(){
        return(
            <input type={this.props.type} id={this.props.id} name={this.props.name} min={this.props.min} max={this.props.max} placeholder={this.props.placeholder}/>     
        )
    }
}
export default PreviewInput;