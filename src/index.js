import React from "react";
import { render } from "react-dom";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div>
    <Header />
  </div>
);



render(<App />, document.getElementById("root"));
