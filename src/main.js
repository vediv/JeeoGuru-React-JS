import React from "react";
import { render } from "react-dom";
// import Carousel from "./component/Carousel";
import Header from "./component/Header";
// import Image from "./component/Image";
import Carousel from "./component/Carousel";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div>
    <Header />
  </div>
);

const Apps = () => (
  <div>
    <Carousel />
  </div>
);

const SimpleSlider = () => (
  <div>
    <Slider />
  </div>
);

const FooterSide = () => (
  <div>
    <Footer />
  </div>
);

render(<App />, document.getElementById("header"));
render(<Apps />, document.getElementById("root"));
render(<SimpleSlider />, document.getElementById("recommended"));
render(<FooterSide />, document.getElementById("footer"));
