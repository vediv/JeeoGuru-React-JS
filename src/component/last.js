import React, { Component } from "react";
import './css/last.css';

export default class LastOne extends Component {
render()
{
return(
        <div className="last">
            <hr className="line1"/>
          <span>
            <br />
            <div className="lastleft">
          <a href="http://www.jeeoguru.com/about-us"><p>About Us &nbsp; |</p></a>

          <a href="http://www.jeeoguru.com/privacy-policy">
            <p>Privacy Policy  &nbsp; |</p></a>

          <a href="http://www.jeeoguru.com/terms_condition"><p>Terms  &nbsp; |</p></a>

          <a href="http://www.jeeoguru.com/refund_policy">
            <p>Refund Policy  &nbsp; |</p></a>

          <a href="http://www.jeeoguru.com/subscription_payment"><p>Subscription & Cancelation</p>
          </a>
        </div>
        </span>
        <div className="all">
		    ©   &nbsp;All Rights Reserved.  &nbsp;
		    </div>
        </div>
      );
}
}
