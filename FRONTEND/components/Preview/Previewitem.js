import React                from 'react'
import                           '../Preview/Previewitem.css'
import image1               from './images/product-1.jpg'
import image2               from './images/product-2.jpg'
import image3               from './images/product-3.jpg'
import image4               from './images/product-4.jpg'
import {toast}              from 'react-toastify'
import Userstore            from '../stores/Userstore'
import Carousel_li          from '../Carousel/Carousel_li'
import Carousel_items       from '../Carousel/Carousel_items'
import Carousel_arrows      from '../Carousel/Carousel_arrows'
import PreviewInput         from './PreviewInput'
import Preview_Checkbox     from './Preview_Checkbox'
import Preview_Color        from './Preview_Color'
import Previewsize          from './Previewsize'
import PreviewTabs          from './PreviewTabs'
import Descriptioncontent   from './Descriptioncontent'
toast.configure()

class Previewitem extends React.Component{
    async additem(){
        if(!Userstore.isLoggedIn){
            toast.info("PLEASE LOGIN TO CONTINUE",{position: toast.POSITION.BOTTOM_CENTER})
            return

        }
        try{
            let res =await fetch('/additemtocart',{
              method:'post',
              headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name    :Userstore.previewname,
                image   :Userstore.previewimage,
                prize   :Userstore.previewprize,
                username:Userstore.username,
              })
            });
            let result =await res.json();
            if(result.success)
            {
                toast.info("Item Added Successfully",{position: toast.POSITION.BOTTOM_CENTER})
                this.setState({
                    showlist:true
                })
                Userstore.showcart      =true
                Userstore.showPreview   =false
                Userstore.showcheckout  =false;   
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    render(){
        return(
            <section class="product-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <ul class="carousel-indicators">
                                    <Carousel_li
                                        carouselid      ="#demo"
                                        carouselslide   ="0"
                                        carouselclass   ="active"
                                    />
                                    <Carousel_li
                                        carouselid      ="#demo"
                                        carouselslide   ="1"
                                    />
                                    <Carousel_li
                                        carouselid      ="#demo"
                                        carouselslide   ="2"
                                    />
                                </ul>

                                <div class="carousel-inner">
                                    <Carousel_items
                                        carouselclass   ="carousel-item active"
                                        carouselimage   ={Userstore.previewimage}
                                    />
                                </div>

                                <Carousel_arrows
                                    arrowclass          ="carousel-control-prev"
                                    href                ="#demo"
                                    iconname            ="carousel-control-prev-icon"
                                />
                                <Carousel_arrows
                                    arrowclass          ="carousel-control-next"
                                    href                ="#demo"
                                    iconname            ="carousel-control-next-icon"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product__details__text mt-5">
                                <h3>{Userstore.previewname}</h3>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <span>( 138 reviews )</span>
                                </div>
                                <div class="product__details__price">Rs. {Userstore.previewprize} <span>Rs. {Userstore.alternateprize}</span></div>
                                <p>All products are available at cheap price. 20-30% discount for all products in the Codingmart Site.</p>
                                <div class="product__details__button">
                                    <div class="quantity">
                                        <span>Quantity:</span>
                                        <div class="pro-qty">
                                            <PreviewInput
                                                type        ="number"
                                                id          ="tentacles"
                                                name        ="tentacles"
                                                min         ="1"
                                                max         ="100"
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>
                                    <a href="#" class="cart-btn" onClick={()=>{this.additem()}}><span class="icon_bag_alt"></span> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_adjust-horiz"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__details__widget">
                                    <ul>
                                        <Preview_Checkbox
                                            checkboxtext    ="Availability:"
                                            checkboxtype    ="stock__checkbox"
                                            labelfor        ="stockin"
                                            inputid         ="stockin"
                                            labeltext       ="In stock"
                                            inputtype       ="checkbox"
                                        />
                                            <li>
                                                <span>Available color:</span>
                                                <div class="color__checkbox">
                                                    <Preview_Color
                                                        labelfor    ="red"
                                                        id          ="red"
                                                    />
                                                    <Preview_Color
                                                        labelfor    ="black"
                                                        id          ="black"
                                                    />
                                                    <Preview_Color
                                                        labelfor    ="grey"
                                                        id          ="grey"
                                                    />
                                                </div>
                                        </li>
                                        <li>
                                            <span>Available size:</span>
                                                <div class="size__btn">
                                                    <Previewsize
                                                        labelfor    ="xs-btn"
                                                        class       ="active"
                                                        size        ="xs"
                                                        id          ="xs-btn"
                                                    />
                                                    <Previewsize
                                                        labelfor    ="s-btn"
                                                        id          ="s-btn"
                                                        size        ="s"
                                                    />
                                                    <Previewsize
                                                        labelfor    ="m-btn"
                                                        id          ="m-btn"
                                                        size        ="m"
                                                    />
                                                    <Previewsize
                                                        labelfor    ="l-btn"
                                                        id          ="l-btn"
                                                        size        ="l"
                                                    />
                                        </div>
                                    </li>
                                    <li>
                                        <span>Promotions:</span>
                                        <p>Free shipping</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <PreviewTabs
                                    tabname ="Description"
                                    class   ="nav-link active"
                                    href    ="#tabs-1"
                                />
                                <PreviewTabs
                                    tabname ="Specification"
                                    class   ="nav-link"
                                    href    ="#tabs-2"
                                />
                                <PreviewTabs
                                    tabname ="Reviews ( 2 )"
                                    class   ="nav-link"
                                    href    ="#tabs-3"
                                />
                            </ul>
                            <div class="tab-content">
                                <Descriptioncontent
                                    name    ="Description"
                                    class   ="tab-pane active"
                                    id      ="tabs-1"
                                    content ="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                             quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                             Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                             voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                             consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                             consequat massa quis enim."
                                />
                                <Descriptioncontent
                                    name    ="Specification"
                                    class   ="tab-pane"
                                    id      ="#tabs-2"
                                    content ="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                    consequat massa quis enim."
                                />

                                <Descriptioncontent
                                    name    ="Review ( 2 )"
                                    class   ="tab-pane"
                                    id      ="tabs-3"
                                    content ="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                    consequat massa quis enim."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Previewitem