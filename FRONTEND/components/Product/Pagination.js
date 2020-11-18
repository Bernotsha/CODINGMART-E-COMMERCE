import React from 'react'

class Pagination extends React.Component{
    render(){
        return(
            <a href="#" className={this.props.class}>{this.props.no}</a>

        )
    }
}
export default Pagination