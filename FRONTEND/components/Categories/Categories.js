import React            from 'react'
import                       '../Categories/Categories.css'
import Categoriesmap    from './Categoriesmap'
import Userstore        from '../stores/Userstore'
import {toast}          from 'react-toastify'
import Categories_Desc  from './Categories_Desc'
toast.configure()


class Categories extends React.Component{
    showPage1(){
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;
    }
    showPage2(){
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;    }
    showPage3(){
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;    }
    showPage4(){
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;    }
    showPage5(){
        Userstore.showlogin     =false;
        Userstore.showproducts  =true;
        Userstore.showcart      =false;
        Userstore.showcheckout  =false;
        Userstore.showPreview   =false;    }
    render(){
        const value=[
            {
                htext   :"Men’s fashion",
                ptext   :'358 items',
                image   :'categories__item image2',
                onclick :()=>this.showPage2()
            },
            {
                htext   :"Kids's fashion",
                ptext   :'273 items',
                image   :'categories__item image3',
                onclick :()=>this.showPage3()
            },
            {
                htext   :"Cosmetics",
                ptext   :'159 items',
                image   :'categories__item image4',
                onclick :()=>this.showPage4()
            },
            {
                htext   :"Accessories",
                ptext   :'172 items',
                image   :'categories__item image5',
                onclick :()=>this.showPage5()
            }
        ]
        const values = value.map(values=> <Categoriesmap values={values}></Categoriesmap>)

        return(
            <section class="categories">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="categories__item categories__large__item set-bg image1">
                                <Categories_Desc
                                    heading="Women's fashion"
                                    description="Amazing collection at cheap Price. Available 20-30% of dicount for every products."
                                    anchortext="Shop now"
                                    function={()=>this.showPage1()}
                                />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                {values}
                            </div>
                        </div>
                    </div>
                </div>
            </section>       
        )
    }
}
export default Categories