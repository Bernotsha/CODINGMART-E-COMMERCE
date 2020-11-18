import React from 'react'
import Cartproduct from '../components/Cartproduct/Cartproduct'
import Footer from '../components/Footer/Footer'
import DecideHeader from '../components/Header/DecideHeader'
import Header from '../components/Header/Header'

class Cart extends React.Component{
    render(){
        return(
            <div>
                <DecideHeader/>
                <Cartproduct/>
                <Footer/>
            </div>
        )
    }
}
export default Cart