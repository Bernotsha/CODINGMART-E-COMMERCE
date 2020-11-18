import '../Checkout/Checkout.css'
import React from 'react'
import Userstore from '../stores/Userstore'
import CheckoutInput from './CheckoutInput';

class Checkout extends React.Component{
    render(){
        return(
            <div>
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>CASH ON DELIEVERY</strong> is not Available.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <form class="checkout">
                <div class="checkout-header">
                  <h1 class="checkout-title">Checkout<span class="checkout-price">{Userstore.checkoutprize}</span></h1>
                </div>
                <p>
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-name"
                      placeholder ="Your name"
                    />
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-exp"
                      placeholder ="MM"
                    />
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-exp"
                      placeholder ="YY"
                    />
                </p>
                <p>
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-card"
                      placeholder ="4111 1111 1111 1111"
                    />
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-cvc"
                      placeholder ="CVC"
                    />
                </p>
                <p> 
                    <CheckoutInput
                      type        ="text"
                      class       ="checkout-input checkout-carrd address"
                      placeholder ="Address with pincode"
                    />              
                </p>
                <p>
                    <CheckoutInput
                      type        ="submit"
                      class       ="checkout-btn"
                      value       ="Purchase"
                    />

                </p>
              </form> 
            </div>  )
    }
}
export default Checkout;