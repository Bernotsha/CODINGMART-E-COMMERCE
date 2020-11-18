import React, { useReducer } from 'react'
import '../components/Carousel/Carousel.css'
import { observer } from 'mobx-react'
import Userstore from '../components/stores/Userstore'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Preview from '../pages/Preview'
import Shop from '../pages/Shop'
import image1 from './common.gif'
import './main.css'
import Login from '../pages/Login'
import {toast}      from 'react-toastify'
toast.configure()
import Checkout from '../components/Checkout/Checkout'
import Liked from '../pages/Liked'

class app extends React.Component{
    async componentDidMount(){
        try{
          let res = await fetch('/isLoggedIn',{
            method: 'post',
            headers: {
              'Accept' : 'application/json',
              'Content-Type':'application/json'
                    }
          });
          let result= await res.json();
    
          if(result && result.success){
            Userstore.username = result.username;
            Userstore.isLoggedIn = true;
            Userstore.loading=false;

          }
    
          else{
            Userstore.isLoggedIn=false;
            Userstore.loading=false;
            toast.info("SESSION EXPIRED TRY TO LOGIN",{position: toast.POSITION.BOTTOM_CENTER})

          }
        }
        catch(e){
          Userstore.isLoggedIn=false;
          Userstore.Liked=true;
          Userstore.loading=false;
          toast.info("SESSION EXPIRED TRY TO LOGIN",{position: toast.POSITION.BOTTOM_CENTER})


        }
    }
        
    render(){
        if(Userstore.loading)
    {
      return(
        <div className='gifloader'>
          <img src={image1} className='loadergif' alt="Image not found"/>
        </div>
      )
    }
    if(Userstore.Liked)
    {
      return(
        <Liked/>
      )
    }
    if(Userstore.showcheckout)
    {
      return(
        <div className="app">
        <Checkout/>
      </div>
      )
    }



    if(Userstore.showPreview){
      return(
        <Preview
          name={Userstore.previewname}
          image={Userstore.previewimage}
          prize={Userstore.previewprize}
          />
      )
    }
    if(Userstore.showcart)
    {
      return (
        <div className="app">
          <Cart/>
        </div>
      );
    }
    if(Userstore.showproducts)
    {
      return (
        <div className="app">
          <Shop/>
        </div>
      );
    } 
    if(Userstore.showlogin)
    {
      return(
        <div className="app">
          <Login/>
        </div>
      )
    } 
    return (
      <div className="app">
        <Home/>
      </div>
    );

  
    }
}
export default observer(app);