import React from 'react'

class LikeditemImage extends React.Component{
    render(){
        return(
            <img src={this.props.src} className={this.props.class} alt="Image not found"/>
        )
    }
}
export default LikeditemImage