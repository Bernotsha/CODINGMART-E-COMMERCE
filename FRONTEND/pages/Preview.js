import React from 'react'
import Footer from '../components/Footer/Footer'
import DecideHeader from '../components/Header/DecideHeader'
import Header from '../components/Header/Header'
import Previewitem from '../components/Preview/Previewitem'

class Preview extends React.Component{
    render(){
        return(
            <div>
                <DecideHeader/>
                <Previewitem/>
                <Footer/>
            </div>

        )
    }
}
export default Preview