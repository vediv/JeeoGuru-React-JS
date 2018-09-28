import React, { Component } from "react";
import Slider from "react-slick";
import './css/slider.css';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Sliders: []
    }
  }

  componentWillMount() {
    this.fetchCarousels();
  }

  fetchCarousels() {
      fetch('http://ott.planetcast.in:6086/home?partnerid=ott503&userid=0&limit=10&countrycode=IN',{method: 'post'})
      .then(res => res.json()).then((result) => {
        this.setState({isLoaded: true, Sliders: result.home});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }
  handleEvents1(item){
          return item.map((event, idx) => {
   return<li><img src={`${event.thumburl}/width/500/height/300/quality/75`} alt=""/></li>
          })
      }
  render() {
    const settings = {
      autoplay:false,
       // autoplaySpeed:2500,
       arrows:true,
       centerMode:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
          {this.state.Sliders.map((Slider, key) => {
            return (
              <ul className="sidebar" type="none">
                  <h4>{Slider.title_tag_name}</h4>
                {this.handleEvents1(Slider.search_tag)}
              </ul>
            )
          })}
        </div>
        </Slider>
      </div>
    );
  }
}
