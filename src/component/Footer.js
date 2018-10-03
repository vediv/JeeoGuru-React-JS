import React, {Component} from "react";
import { SocialIcon } from 'react-social-icons';
import './css/footer.css';
import foot from '../img/foot.jpg';

export default class FooterSide extends Component {
  render() {
    var sectionStyle = {
      color: "white",
      backgroundImage: `url(${foot})`
    };
    return (<section className="section" style={sectionStyle}>
      <div>
        <div id="left">
          <h5>ABOUT<span>
              JEEOGURU</span>
          </h5>
            <p >Biocine Entertainment was established as a partnership firm in 2017. The company is engaged in providing entertainment based mobile application services. The company will commence commercial operations from August 2018
          </p>
        </div>
        <div id="mid">
          <h5>CONTACT<span>
              US</span>
          </h5><br/>
          <b>Biocine Entertainment</b><br/>
          <p>
            60/141 Haripada Dutta Lane Kolkatta-700033<br/>
            +09874558108
          </p>
        </div>
        <div id="right">
          <SocialIcon url="http://facebook.com" network="facebook" style={{ height: 40, width: 40 }}/>&nbsp;&nbsp;&nbsp;&nbsp;
          <SocialIcon url="http://google.com" network="google" style={{ height: 40, width: 40 }}/>&nbsp;&nbsp;&nbsp;&nbsp;
          <SocialIcon url="http://twitter.com" network="twitter" style={{ height: 40, width: 40 }}/>
        </div>
      </div>
    </section>);
  }
}
