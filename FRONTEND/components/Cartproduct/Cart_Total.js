import React from 'react'

class Cart_Total extends React.Component{
    render(){
        return(
            <li>{this.props.text} <span>Rs. {this.props.value}</span></li>

        )
    }
}
export default Cart_Total