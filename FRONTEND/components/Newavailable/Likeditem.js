import React                from 'react'
import {toast}              from 'react-toastify'
import                           '../Newavailable/Newavailable.css'
import                           'react-toastify/dist/ReactToastify.css'
import Userstore            from '../stores/Userstore'
import image1               from '../../src/common.gif'
import LikeditemImage from './LikeditemImage'
toast.configure()

class Likeditem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productlist :'',
            showlist    :false
        }
        this.showhome()
    }

    showpreview(Image,Name,Prize,alternateprize){
        Userstore.previewimage      =Image;
        Userstore.previewname       =Name;
        Userstore.alternateprize    =alternateprize;
        Userstore.previewprize      =Prize;
        Userstore.showlogin         =false;
        Userstore.showproducts      =false;
        Userstore.showcart          =false;
        Userstore.showcheckout      =false;
        Userstore.showPreview       =true;
    }
    async showhome(){
        try{
            let res =await fetch('/showlikedproducts',{
              method:'post',
              headers:{
                'Accept'        :'application/json',
                'Content-Type'  : 'application/json'
              },
              body: JSON.stringify({

                username    :Userstore.username
              })
            });
            let result =await res.json();
            if(result.success)
            {
                this.setState({                    
                    productlist :result.msg,
                    showlist    :true
                })

            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    render(){
        if(this.state.showlist){
            const personList = this.state.productlist.map(person=>(
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic" style={{backgroundImage: `url(${person.image})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                        <div class="label new">{person.Label}</div>
                        <ul class="product__hover">
                            <li><a href="#"><span class="icon_heart_alt" onClick={()=>this.showpreview(person.image,person.name,person.prize,person.alternateprize)}><i class="fa fa-shopping-cart"></i></span></a></li>
                            <li><a href={person.image} class="image-popup"><span class="icon_bag_alt"><i class="fa fa-expand" aria-hidden="true"></i></span></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">{person.name}</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">Rs. {person.prize}</div>
                    </div>
                </div>
            </div>

        ))
        return(
            <section class="product spad">
                <div class="container">
                    <div class="col-lg-4 col-md-4">
                        <div class="section-title">
                            <h4>Liked product</h4>
                        </div>
                    </div>

                    <div class="row property__gallery">
                        {personList}
                    </div>
                </div>
            </section>        )
    }
    return(
        <div className='gifloader'>
            <LikeditemImage
                src     ={image1}
                class   ="loadergif"
            />
        </div>
    )
}
}
export default Likeditem