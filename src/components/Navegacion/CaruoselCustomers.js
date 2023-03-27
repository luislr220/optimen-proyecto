import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*IMAGENES*/
import next from '../../img/flecha-correcta.png';
import prev from '../../img/flecha-izquierda.png';
import op1 from '../../img/Customers/op1.png';
import op2 from '../../img/Customers/op2.png';
import op3 from '../../img/Customers/op3.png';
import op4 from '../../img/Customers/op4.png';


export default class CarouselC extends Component {
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
                <img src={op1}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op2}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op3}
                  className='carruIMG'
                  alt=''
                />
              </div>
              <div className='c'>
                <img src={op4}
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
