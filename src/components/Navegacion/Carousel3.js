import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*IMAGENES*/
import next from '../../img/flecha-correcta.png';
import prev from '../../img/flecha-izquierda.png';
import op5 from '../../img/customer2/op5.png';
import op6 from '../../img/customer2/op6.png';
import op7 from '../../img/customer2/op7.png';
import op8 from '../../img/customer2/op8.png';


export default class CarouselC2 extends Component {
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
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };

    return (
      <div>

        <div className="carousel-wrapper">
          <div>
            <Slider {...settings} >
              <div className='c'>
                <img src={op5}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op6}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op7}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op8}
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
