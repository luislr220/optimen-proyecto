import React, { Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*IMAGENES*/
import Avion1 from'../../img/Avion1.jpg';
import next from '../../img/flecha-correcta.png';
import prev from '../../img/flecha-izquierda.png';
import bjx from '../../img/bjaerospace1.png';
import IECA from '../../img/IECA.png';
import REDHAT from '../../img/REDHAT.png';
import clutig from '../../img/clutig.png';
import cofoce from '../../img/cofoce.png';

export default class Carousel extends Component {
  render() {
    const CustomPrevArrow = (props) => (
      <button {...props} className="slick-arrow_prev">
        <img
          src={prev}
          alt=''
          className="prev"

        />
      </button>
    );

    
  
    const CustomNextArrow = (props) => (
      <button {...props} className="slick-arrow_next">
        <img
          src={next}
          alt=''
          className="next"

        />
      </button>
    );

    var settings = {
      dots: false,
      infinite: true,
      speed: 1300,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 700,
      nextArrow: <CustomNextArrow/>,
      prevArrow: <CustomPrevArrow/>,
    };

    return (
      <div>

        <div className="carousel-wrapper">
          <div className='c'>
          <Slider {...settings}>
          <div>
            <img src={bjx}
              className='carruIMG'
              alt=''
            />
          </div>
          <div>
          <img src={IECA}
              className='carruIMG'
              alt=''
            />
          </div>
          <div>
            <img src={REDHAT}
              className='carruIMG'
              alt=''
            />
          </div>
          <div>
            <img src={clutig}
              className='carruIMG'
              alt=''
            />
          </div>
          <div>
            <img src={cofoce}
              className='carruIMG'
              alt=''
            />
          </div>
          <div>
            <img src={Avion1}
              className='carruIMG'
              alt=''
            />
          </div>
          </Slider>
          </div>
        </div>
      </div>
    );

  }
}
