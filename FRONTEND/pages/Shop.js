import React from 'react'
import Footer from '../components/Footer/Footer'
import DecideHeader from '../components/Header/DecideHeader'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'


class Shop extends React.Component{
    render(){
    
            return(
                <div>
                    <DecideHeader/>
                    <Product/>
                    <Footer/>
                </div>
            )
        

    }
}
export default Shop