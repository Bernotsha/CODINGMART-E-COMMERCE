import React from 'react'

class CartInputTag extends React.Component{
    render(){
        return(
            <input type={this.props.type} placeholder={this.props.placeholder}/>

        )
    }
}
export default CartInputTag;

