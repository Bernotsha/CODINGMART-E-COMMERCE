import React from 'react'

class TableHead extends React.Component{
    render(){
        return(
            <th>{this.props.headingname}</th>
            )
    }
}
export default TableHead;