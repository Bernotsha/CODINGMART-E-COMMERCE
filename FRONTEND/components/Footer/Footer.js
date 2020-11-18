import React        from 'react'
import                   '../Footer/Footer.css'
import pay1         from './images/payment-1.png'
import pay2         from './images/payment-2.png'
import pay3         from './images/payment-3.png'
import pay4         from './images/payment-4.png'
import pay5         from './images/payment-5.png'
import {toast}      from 'react-toastify'
import FooterInput  from './FooterInput'
toast.configure()

class Footer extends React.Component{
    render(){
        const images=[pay1,pay2,pay3,pay4,pay5];
        const links=["About","Blogs","Contact","FAQ"];
        const outsidelinks=["My Account","Order Tracking","Check out","Wish list"];
        const socialicons=["fa fa-facebook","fa fa-twitter","fa fa-youtube-play","fa fa-instagram","fa fa-pinterest"];

        return(
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="footer_about">
                                <div class="footer_logo"><a href="./index.html">CODINGMART</a></div>
                                <p>Codingmart technologies Pvt ltd is an IT Specialist located in Bangalore and Coimbatore. We are into IT and Strategy consulting in India and abroad.</p>
                                <div class="footer_payment">
                                    {
                                        images.map(image=><a href="#"><img src={image} alt=""/></a>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-5">
                            <div class="footer_widget">
                                <h6>Quick links</h6>
                                <ul>
                                    {
                                        links.map(link=><li><a href="https://codingmart.com/">{link}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4">
                            <div class="footer_widget">
                                <h6>Account</h6>
                                <ul>
                                    {
                                        outsidelinks.map(link=><li><a href="https://codingmart.com/">{link}</a></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-8 col-sm-8">
                            <div class="footer_newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <FooterInput
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <button type="submit" class="site-btn"><a href="mailto:bernotshasekar1999@gmail.com">REPORT</a></button>
                                </form>
                                <div class="footer_social">
                                    {
                                        socialicons.map(icon=><a href="#"><i class={icon}></i></a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer