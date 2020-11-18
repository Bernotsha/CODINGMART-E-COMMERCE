import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Registerpage from '../components/Registration/Registerpage'


class Login extends React.Component{
    
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div>
                <Header/>
                <Registerpage/>
                <Footer/>
            </div>
        )
        
    }
}
export default Login