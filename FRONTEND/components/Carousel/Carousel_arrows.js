import React from 'react'

class Carousel_arrows extends React.Component{
    render(){
        return(
            <a class={this.props.arrowclass} href={this.props.href} role="button" data-slide="prev">
                <span class={this.props.iconname} aria-hidden="true"></span>
                <span class="sr-only">{this.props.arrow}</span>
            </a>
        )
    }
}
export default Carousel_arrows