import React from 'react'

class Carousel_li extends React.Component{
    render(){
        return(
            <li data-target={this.props.carouselid} data-slide-to={this.props.carouselslide} class={this.props.carouselclass}></li>
        )
    }
}
export default Carousel_li