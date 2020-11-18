import React from 'react'

class RefreshButton extends React.Component{
    render(){
        return(
            <div class="col-lg-6 col-md-6 col-sm-6">
            <div class={this.props.buttontype}><a href="#" onClick={()=>this.props.function()}>{this.props.buttontext}</a></div>
        </div>
        )
    }

}
export default RefreshButton;