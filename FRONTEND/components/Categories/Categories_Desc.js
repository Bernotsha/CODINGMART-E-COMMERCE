import React from 'react'

class Categories_Desc extends React.Component{
    render(){
        return(
            <div class="categories__text">
                <h1>{this.props.heading}</h1>
                <p>{this.props.description}</p>
                <a href="#" onClick={()=>this.props.function()}>{this.props.anchortext}</a>
            </div>
        )
    }
}
export default Categories_Desc