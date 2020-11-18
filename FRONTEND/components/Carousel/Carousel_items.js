import React from 'react'

class Carousel_items extends React.Component{
    render(){
        return(
            <div class={this.props.carouselclass}><img src={this.props.carouselimage} class="d-block w-100" alt="Sorry Image not found"/></div>
        )
    }
}
export default Carousel_items;