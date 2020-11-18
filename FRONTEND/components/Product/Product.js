import React                from 'react'
import                           '../Product/Product.css'
import Userstore            from '../stores/Userstore'
import {toast}              from 'react-toastify'
import image1               from '../../src/common.gif'
import Productcardscategory from './Productcardscategory'
import Productsize          from './Productsize'
import Pagination           from './Pagination'
toast.configure()
class Product extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            productlist     :'',
            showlist        :false,
            total           :0,
            quantity        :0,
            searchitem      :''
        }
        this.showsearchitem();
    }
    showcart(Image,Name,Prize){
        Userstore.showproducts  =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;
        Userstore.showcart      =true;
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
    item(){
        let txt= document.getElementById('searchtxt1').value;
        alert(txt);
        this.setState({
            searchitem:txt
        })
        this.showsearchitem();
    }
    category(type)
    {
        this.setState({
            searchitem:type
        })
        this.showsearchitem();
    }
    async showsearchitem(){

        try{
            let res =await fetch('/customsearch',{
              method:'post',
              headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                txt :this.state.searchitem
              })
            });
            let result =await res.json();
            if(result.success)
            {
                this.setState({                    
                    productlist:result.msg,
                    showlist:true
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
            const personList= this.state.productlist.map(person=>(    
                <div class="col-lg-4 col-md-6 p-1">
                    <div class="product__item">
                        <div class="product__item__pic"  style={{backgroundImage: `url(${person.image})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                            <div class="label new">{person.label}</div>
                            <ul class="product__hover">
                                <li><a href="img/product/product-4.jpg" class="image-popup"><span class="arrow_expand"><i class="fa fa-heart" aria-hidden="true"></i></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt" onClick={()=>this.showcart(person.image,person.name,person.prize)}><i class="fa fa-shopping-cart"></i></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt" onClick={()=>this.showpreview(person.image,person.name,person.prize,person.alternateprize)}><i class="fa fa-expand" aria-hidden="true"></i></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">{person.name}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">Rs. {person.prize}</div>
                        </div>
                    </div>
                </div>
            ))
        return(
            <section class="shop spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="shop__sidebar">
                                <div class="sidebar__categories">
                                    <div class="section-title">
                                        <h4>Categories</h4>
                                        <input type='text' className='searchbox' id='searchtxt1'/>
                                        <button className='searchbutton' onClick={()=>{this.item()}}>SEARCH</button>
                                    </div>
                                    <div class="categories__accordion">
                                        <div class="accordion" id="accordionExample">                                            
                                            <div class="card">
                                                <div class="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">Men</a>
                                                </div>
                                                <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <ul>
                                                            <li onClick={()=>{this.category("tshirt")}}><a href="#">T-Shirt</a></li>
                                                            <li onClick={()=>{this.category("formal")}}><a href="#">Formals</a></li>
                                                            <li onClick={()=>{this.category("shoes")}}><a href='#'>Shoes</a></li>
                                                            <li><a href="#">Shirts</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">Jeans</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseThree">Kids</a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Accessories</a>
                                        </div>
                                        <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                                        </div>
                                        <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                    <li><a href="#">Coats</a></li>
                                                    <li><a href="#">Jackets</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">T-shirts</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar__filter">
                            <div class="section-title">
                                <h4>Shop by price</h4>
                            </div>
                            <div class="filter-range-wrap">
                                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="99"></div>
                                <div class="range-slider">
                                    <div class="price-input">
                                        <p>Price:</p>
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Filter</a>
                        </div>
                        <div class="sidebar__sizes">
                            <div class="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div class="size__list">
                                <Productsize
                                    labelfor    ="xxs"
                                    id          ="xxs"
                                    attribute   ="xxs"
                                />
                                <Productsize
                                    labelfor    ="xs"
                                    id          ="xs"
                                    attribute   ="xs"
                                />
                                <Productsize
                                    labelfor    ="xss"
                                    id          ="xs-s"
                                    attribute   ="xss"
                                />
                                <Productsize
                                    labelfor    ="s"
                                    id          ="s"
                                    attribute   ="s"
                                />
                                <Productsize
                                    labelfor    ="m"
                                    id          ="m"
                                    attribute   ="m"
                                />
                                
                            
                                <Productsize
                                    labelfor    ="ml"
                                    id          ="ml"
                                    attribute   ="m-l"
                                />
                                <Productsize
                                    labelfor    ="l"
                                    id          ="l"
                                    attribute   ="l"
                                />
                                <Productsize
                                    labelfor    ="xl"
                                    id          ="xl"
                                    attribute   ="xl"
                                />
                                
                            </div>
                        </div>
                        <div class="sidebar__color">
                            <div class="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div class="size__list color__list">
                            <Productsize
                                    labelfor    ="black"
                                    id          ="black"
                                    attribute   ="Blacks"
                                />
                                <Productsize
                                    labelfor    ="whites"
                                    id          ="whites"
                                    attribute   ="Whites"
                                />
                                <Productsize
                                    labelfor    ="reds"
                                    id          ="reds"
                                    attribute   ="Reds"
                                />
                                <Productsize
                                    labelfor    ="greys"
                                    id          ="greys"
                                    attribute   ="Greys"
                                />
                      
        
                                <Productsize
                                    labelfor    ="blues"
                                    id          ="blues"
                                    attribute   ="Blues"
                                />
                                <Productsize
                                    labelfor    ="beige"
                                    id          ="beige"
                                    attribute   ="Beige"
                                />
                                <Productsize
                                    labelfor    ="greens"
                                    id          ="greens"
                                    attribute   ="Greens"
                                />
                                <Productsize
                                    labelfor    ="yellows"
                                    id          ="yellows"
                                    attribute   ="Yellows"
                                />            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9">
                    <div class="row">
                        {personList}
                        <div class="col-lg-12 text-center">
                            <div class="pagination__option">
                                <Pagination
                                    no      ="1"
                                />
                                <Pagination
                                    no      ="2"
                                    class   ="isDisabled"
                                />
                                <Pagination
                                    no      ="3"
                                    class   ="isDisabled"
                                />
                                <a class="isDisabled" href="#"><i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
    return(
        <div className='gifloader'>
          <img src={image1} className='loadergif' alt="Image not found"/>
        </div>
    )
}
 }
export default Product