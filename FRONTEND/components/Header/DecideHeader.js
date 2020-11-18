import React        from 'react'
import Userstore    from '../stores/Userstore'
import Header       from './Header'
import LoggedHeader from './LoggedHeader'


class DecideHeader extends React.Component{
    render(){
        if(Userstore.isLoggedIn)
        {
            return(
                <LoggedHeader/>
            )
        }
        return(
            <Header/>
        )
    }
}
export default DecideHeader