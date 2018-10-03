import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import stringSimilarity from 'string-similarity';
import originals from './original';
import Carousel from "./Carousel";
import Slider from "./Slider";
import Footer from "./Footer";
import LastOne from "./last";
import './css/Header.css';
import logo from '../img/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      slick_carousel_active: true,
      carousel_active: true
    };
  }

  componentDidMount() {
    fetch("http://ott.planetcast.in:6086/menu?partnerid=ott503&userid=0").then(res => res.json()).then((result) => {
      this.setState({isLoaded: true, menus: result.Menu});
    }, (error) => {
      this.setState({isLoaded: true, error});
    })
  }
  func(event) {
    var k = document.getElementsByClassName('menu')[event].textContent;
  var Movie_similarity = stringSimilarity.compareTwoStrings('MOVIES', k);
    var Home_similarity1 = stringSimilarity.compareTwoStrings('HOME', k);
  if(Movie_similarity)
    {
    this.setState({slick_carousel_active:false , carousel_active:false});
    }
    else if(Home_similarity1)
    {
        this.setState({slick_carousel_active:true , carousel_active:true});
    }
    else{
        this.setState({slick_carousel_active:false , carousel_active:true});}
  }

  render() {
    const {error, isLoaded, menus} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<Router>
        <div>
        <div className="container1">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="logo"><img src={logo} alt=""/></a>
              </Navbar.Brand>
                <Nav>
                  <ul className="demo">
                    {
                      menus.map((menu , index) => (<NavItem className="option" key={index}>
                        <li className = "menu" onClick = { () => this.func(index)}><Link to={menu.catName}><img alt="img" src={menu.menu_icon}/>{menu.catName}</Link></li>
                      </NavItem>))
                    }
                    <div className="container-right ">
                      <a className="header-right" href="#LOGIN">LOGIN</a>
                    </div>
                    </ul>
                </Nav>
                </Navbar.Header>
              </Navbar>
            </div>{this.state.carousel_active && <Carousel />}
            {this.state.slick_carousel_active && <Slider />}

              <Switch>
              <Route exact path = '/ORIGINALS'
              component = {
                originals
              }/></Switch>
              <Footer />
              <LastOne /></div>
                </Router>
              );
    }
  }
}

export default App;
