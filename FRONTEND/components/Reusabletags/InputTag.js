import React from 'react'

class InputTag extends React.Component{
    render(){
        return(
            <input 
                type={this.props.type}
                className={this.props.className}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={ (e)=>this.props.onChange(e.target.value) }
                />

        )
    }
}
export default InputTag;