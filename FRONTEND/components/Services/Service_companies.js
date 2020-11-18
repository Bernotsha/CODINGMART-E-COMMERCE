import React from 'react'

class Service_companies extends React.Component{
    render(){
        return(
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="services__item">
                    <i class={this.props.icon}></i>
                    <h6>{this.props.heading}</h6>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default Service_companies