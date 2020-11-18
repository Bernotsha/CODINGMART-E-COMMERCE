import React from 'react'

class Descriptioncontent extends React.Component{
    render(){
        return(
            <div class={this.props.class} id={this.props.id} role="tabpanel">
                <h6>{this.props.name}</h6>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
export default Descriptioncontent