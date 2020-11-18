import React from 'react'

class CartButtonAnchor extends React.Component{
    render(){
        return(
            <a href="#" class={this.props.class} onClick={()=>this.props.onClick()}>{this.props.text}</a>
        )
    }
}
export default CartButtonAnchor