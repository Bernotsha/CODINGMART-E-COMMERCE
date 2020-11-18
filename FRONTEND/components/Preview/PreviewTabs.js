import React from 'react'

class PreviewTabs extends React.Component{
    render(){
        return(
            <li class="nav-item">
                <a class={this.props.class} data-toggle="tab" href={this.props.href} role="tab">{this.props.tabname}</a>
            </li>
        )
    }
}
export default PreviewTabs