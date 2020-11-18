import React from 'react'
 
class CartButton extends React.Component{
    render(){
        return(
            <button type={this.props.type} className={this.props.class}>{this.props.text}</button>

        )
    }
}
export default CartButton;