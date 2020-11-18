import React from 'react'
import Footer from '../components/Footer/Footer'
import DecideHeader from '../components/Header/DecideHeader'
import Likeditem from '../components/Newavailable/Likeditem'

class Liked extends React.Component{
    render(){
        return(
            <div>
                <DecideHeader/>
                <Likeditem/>
                <Footer/>
            </div>
        )
    }
}
export default Liked