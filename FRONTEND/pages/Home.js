import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import DecideHeader from '../components/Header/DecideHeader'
import Header       from '../components/Header/Header'
import LoggedHeader from '../components/Header/LoggedHeader'
import Newavailable from '../components/Newavailable/Newavailable'
import Productslide from '../components/Productslide/Productslide'
import Services     from '../components/Services/Services'

class Home extends React.Component{
    render(){
        return(
            <div>
                <DecideHeader/>
                <Carousel/>
                <Categories/>
                <Newavailable/>
                <Productslide/>
                <Services/>
                <Footer/>
            </div>
        )
    }
}
export default Home