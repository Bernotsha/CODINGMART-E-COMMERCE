import React from 'react'
import '../Services/Services.css'
import Service_companies from './Service_companies'

class Services extends React.Component{
    render(){
        return(
            <section class="services spad">
                <div class="container">
                    <div class="row">
                        <Service_companies
                            icon        ="fa fa-car"
                            heading     ="Free Shipping"
                            description ="For all order over Rs.100"
                        />
                        <Service_companies
                            icon        ="fa fa-money"
                            heading     ="Money Back Guarantee"
                            description ="If good have Problems"
                        />
                        <Service_companies
                            icon        ="fa fa-support"
                            heading     ="Online Support 24/7"
                            description ="Dedicated support"
                        />
                        <Service_companies
                            icon        ="fa fa-headphones"
                            heading     ="Payment Secure"
                            description ="100% secure payment"
                        />
                    </div>
                </div>
            </section>
        )
    }
}
export default Services