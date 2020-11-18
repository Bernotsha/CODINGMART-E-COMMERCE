import React            from 'react'
import image1           from './images/ecommerce4.gif'
import image2           from './images/ecommerce5.gif'
import image3           from './images/ecommerce.gif'
import Carousel_li      from './Carousel_li'
import Carousel_items   from './Carousel_items'
import Carousel_arrows  from './Carousel_arrows'


class Carousel extends React.Component{
    render(){
        return(
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <Carousel_li
            carouselid    ="#carouselExampleIndicators"
            carouselslide ="0"
            carouselclass ="active"
          />
          <Carousel_li
            carouselid    ="#carouselExampleIndicators"
            carouselslide ="1"
          />
          <Carousel_li
            carouselid    ="#carouselExampleIndicators"
            carouselslide ="2"
          />
          
        </ol>
        <div class="carousel-inner">
          <Carousel_items
            carouselclass ="carousel-item active"
            carouselimage ={image1}
          />
          <Carousel_items
            carouselclass ="carousel-item"
            carouselimage ={image2}
          />
          <Carousel_items
            carouselclass ="carousel-item"
            carouselimage ={image3}
          />          
        </div>
        <Carousel_arrows
          arrowclass      ="carousel-control-prev"
          iconname        ="carousel-control-prev"
          href            ="#carouselExampleIndicators"
          arrow           ="Previous"
        />
        <Carousel_arrows
          arrowclass      ="carousel-control-next"
          iconname        ="carousel-control-next"
          href            ="#carouselExampleIndicators"
          arrow           ="Next"
        />
      </div>
        )
    }
}
export default Carousel