import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import './css/carousel.css';
import play from '../img/play1.png';

export default class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Carousels: []
    }
  }

  componentWillMount() {
    this.fetchCarousels();
  }

  fetchCarousels() {
      fetch('http://ott.planetcast.in:6086/home?partnerid=ott503&userid=0&limit=10&countrycode=IN',{method: 'post'})
      .then(res => res.json()).then((result) => {
        this.setState({isLoaded: true, Carousels: result.Carousel});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }
    render() {
        return (
            <Carousel className="caro"
              autoplay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
               >
                 {this.state.Carousels.map((Carousel, key) => {
                   return (
                     <div>
                       <img src={Carousel.extralarge_imgurl} alt="img"/>
                       <div className="play">
                       <a href="/"><img className="playimage" src={play} alt=""/></a>
                     </div>
                     </div>
                   )
                 })}
            </Carousel>
        );
    }
}
