import React, { Component } from "react";
import "./footer.css";
import logo from "../../assets/footer-logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="logo" />
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
