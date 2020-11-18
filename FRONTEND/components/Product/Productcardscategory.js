import React from 'react'

class Productcardscategory extends React.Component{
    render(){
        // const women = ['Saree','Saree'];
        // const womencategory = women.map(category=><li><a href="#">{category}</a></li>        )
        return(
            <div class="card">
            <div class="card-heading active"><a data-toggle="collapse" data-target={this.props.data-target}>{this.props.categoryheading}</a></div>
            <div id={this.props.id} class="collapse" data-parent="#accordionExample">
                <div class="card-body">
                    <ul>
                        <h1>Hello</h1>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default Productcardscategory