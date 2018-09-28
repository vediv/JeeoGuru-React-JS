import React, { Component } from "react";
import Slider from "react-slick";
import './css/slider.css';
import img1 from '../img/1.jpg';
import img2 from '../img/9.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';


export default class RelatedSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
       autoplaySpeed:1500,
       // arrows:true,
       // prevArrow:'<button type="button" class="slick-prev"></button>',
       // nextArrow:'<button type="button" class="slick-next"></button>',
       centerMode:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
      <div className="slider">
        <h5> Related</h5>
        <Slider {...settings}>
        <div>
          <img alt="img" src={img1} />
        </div>
        <div>
          <img alt="img" src={img2} />
        </div>
        <div>
          <img   alt="img" src={img3} />
        </div>
        <div>
          <img   alt="img" src={img6} />
        </div>
        <div>
          <img   alt="img" src={img5} />
        </div>
        <div>
          <img   alt="img" src={img4} />
        </div>
        </Slider>
      </div>
    );
  }
}
