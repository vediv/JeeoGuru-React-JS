import React, { Component } from 'react';
import request from 'superagent';

class Apps extends Component {
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
    request
      .get('http://ott.planetcast.in:6086/home?partnerid=ott503&userid=0&limit=10&countrycode=IN')
      .then((res) => {
        this.setState({
          Carousels: res.Carousel
        })
      })
  }
  fetch('http://ott.planetcast.in:6086/home?partnerid=ott503&userid=0&limit=10&countrycode=IN',{method: 'post'})
 .then(response => response.json())
 .then((responseJson)=>{
   this.setState({Carousels:responseJson.Carousel});
 }).catch((error)=>{
   console.error(error);
 });
  render() {
    return (
      <div className="App">
  {this.state.Carousels.map((Carousel, key) => {
    return (
      <div key={Carousel.priority}>
        <img src={Carousel.custom_img_url} alt="img"/>
      </div>
    )
  })}
</div>
    );
  }
}

export default Apps;
