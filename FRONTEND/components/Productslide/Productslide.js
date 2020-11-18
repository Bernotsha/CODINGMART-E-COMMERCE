import React    from 'react'
import               '../Productslide/Productslide.css'

class Productslide extends React.Component{
    render(){
        return(
            <section class="banner set1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-8 m-auto">
                            <div class="banner__slider owl-carousel">
                                <div class="banner__item">
                                    <div class="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Productslide