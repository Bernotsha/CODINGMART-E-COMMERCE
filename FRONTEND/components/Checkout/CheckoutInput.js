import React from 'react'

class CheckoutInput extends React.Component{
    render(){
        return(
            <input type={this.props.type} className={this.props.class} placeholder={this.props.placeholder} value={this.props.value}/>
        )
    }
}
export default CheckoutInput;