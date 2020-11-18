import React            from 'react'
import                       '../Cartproduct/Cartproduct.css'
import {toast}          from 'react-toastify'
import empty            from '../Cartproduct/images/emptycart.gif'
import Userstore        from '../stores/Userstore'
import TableHead        from './TableHead'
import CartInputTag     from './CartInputTag'
import CartButton       from './CartButton'
import RefreshButton    from './RefreshButton'
import CartButtonAnchor from './CartButtonAnchor'
import Cart_Total       from './Cart_Total'
import Cart_Image       from './Cart_Image'
toast.configure()

class Cartproduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productlist :'',
            showlist    :false,
            total       :0,
            quantity    :0
        }
        this.cart();
    }
    showmore()
    {
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;
    }
    calculate()
    {
        let x = document.getElementsByClassName("sellout");
        var i,output=0;
        for(i=0;i<x.length;i++)
        {
            output=output+parseInt(x[i].innerText);
        }
                this.setState({
            total:output
        })
    }
    updateprize(prize,id){
        let x =document.getElementsByClassName(id);
        let y = x[0].value;
        document.getElementById(id).innerText=parseInt(y)*parseInt(prize);
        this.calculate();
    }
    showcheck()
    {
        Userstore.checkoutprize =this.state.total;
        Userstore.showcheckout  =true;
    }

    async deleteproduct(id){
        try{
            let res =await fetch('/deleteproduct',{
              method:'post',
              headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                item: id,
              })
            });
            let result =await res.json();
            if(result.success)
            {
                toast.info("Item Removed Successfully",{position: toast.POSITION.BOTTOM_CENTER})
                this.setState({
                    showlist:true
                })
                this.cart();    
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }

    async cart(){
        if(Userstore.username=="")
        {
            // toast.info("PLEASE LOGIN TO CONTINUE",{position: toast.POSITION.BOTTOM_CENTER})

        }
        else{
        try{
            let res =await fetch('/cartproducts',{
              method:'post',
              headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: Userstore.username,
              })
            });
            let result =await res.json();
            if(result.success)
            {
                this.setState({                    
                    productlist:result.msg,
                    showlist:true,
                })
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    }
    render(){
        if(this.state.showlist){
            const personList = this.state.productlist.map(person=>(
                <tr>
                    <td class="cart_product_item">
                        <Cart_Image
                            src={person.image}
                            alt="Image not found"
                        />
                        <div class="cart_producT_item_title">
                            <span>{person.name}</span>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </td>
                    <td class="cart_price"> Rs. {person.prize}</td>
                    <td class="cart_quantity">
                        <input type="number" className={person.id} name="tentacles" min="1" max="100" placeholder='1' onChange={()=>this.updateprize(person.prize,person.id)}/>
                    </td>                                    
                    <td class="cart_total" id={person.id} className="sellout"></td>
                    <td class="cart_close"><span class="icon_close" onClick={()=>this.deleteproduct(person.id)}><i class="fa fa-close"></i></span></td>
                </tr>
            ))
        return(
            <section class="shop-cart spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="shop_cart_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <TableHead headingname="Product"/>
                                            <TableHead headingname="Price"/>
                                            <TableHead headingname="Quantity"/>
                                            <TableHead headingname="Total"/>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {personList}   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <RefreshButton
                            buttontype  ="cart_btn"
                            function    ={()=>this.showmore()}
                            buttontext  ="Continue Shopping"
                        />
                        <RefreshButton
                            buttontype  ="cart_btn update__btn"
                            function    ={()=>this.calculate()}
                            buttontext  ="Update cart"
                        />
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="discount_content">
                                <h6>Discount codes</h6>
                                    <form action="#">
                                        <CartInputTag
                                            type        ="text"
                                            placeholder ="Enter your coupon code"
                                        />
                                        <CartButton
                                            type        ="submit"
                                            class       ="site-btn"
                                            text        ="Apply"
                                        />
                                    </form>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-2">
                            <div class="cart_total_procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <Cart_Total
                                        text    ="Subtotal"
                                        value   ={this.state.total}
                                    />
                                    <Cart_Total
                                        text    ="Total"
                                        value   ={this.state.total}
                                    />
                                </ul>
                                <CartButtonAnchor
                                    class   ="primary-btn"
                                    onclick ={()=>this.showcheck()}
                                    text    ="Proceed to checkout"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else{
        return(
            <div className='emptycart'>
                <div className='emptyabsolute'>
                    <span>YOUR CART IS EMPTY</span>
                </div>
                <Cart_Image
                    src     ={empty}
                    class   ="cartemptyimage"
                    alt     ="image not found"
                />

            </div>
        )
    }
}
}
export default Cartproduct