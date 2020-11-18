import React      from 'react'
import                 '../Header/Header.css'
import HeaderMap  from './HeaderMap'
import Userstore  from '../stores/Userstore'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    showHome(){
      Userstore.showlogin     =false;
      Userstore.showproducts  =false;
      Userstore.showcart      =false;
      Userstore.showcheckout  =false;
      Userstore.showPreview   =false;    }
    showCart(){
      Userstore.showlogin     =false;
      Userstore.showproducts  =false;
      Userstore.showcart      =true;
      Userstore.showcheckout  =false;
      Userstore.showPreview   =false;
    }
    showProduct(){
      Userstore.showlogin     =false;
      Userstore.showproducts  =true;
      Userstore.showcart      =false;
      Userstore.showcheckout  =false;
      Userstore.showPreview   =false;
    }
    showLogin(){
      Userstore.showlogin     =true;
      Userstore.showproducts  =false;
      Userstore.showcart      =false;
      Userstore.showcheckout  =false;
      Userstore.showPreview   =false;
    }
    showContact(){
      Userstore.showlogin= false;
      Userstore.showproducts=false;
      Userstore.showcart=false;
      Userstore.showcheckout=false;
      Userstore.showPreview=false;
    }
    render(){
      const value = [
        {
          text  :'HOME',
          func  :()=>this.showHome()
        },
        {
          text  :'CART',
          func  :()=>this.showCart()
        },
        {
          text  :'PRODUCTS',
          func  :()=>this.showProduct()
        },
        {
          text  : 'LOGIN',
          func  :()=>this.showLogin()
        }
      ]
      const values = value.map(values=> <HeaderMap values={values}></HeaderMap>)
        return(
            <div className='header'>
                  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                      <div class="container-fluid">
                          <span class="navbar-brand text-white">CODINGMART</span>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"><span class="navbar-toggler-icon"></span></button>
                          <div class="collapse navbar-collapse" id="navbarResponsive">
                              <ul class="navbar-nav ml-auto">
                                  {values}
                                  <li class="nav-item active">
                                        <a class="nav-link" href="https://codingmart.com/">CONTACT</a>
                                  </li>
                              </ul>
                          </div>
                        </div>
                    </nav>
            </div>        
            )
    }
}
export default Header