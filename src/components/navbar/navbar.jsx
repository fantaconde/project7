import React, { Component } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <img src={logo} alt="logo" />
        <a className="navLink" href="/about">
          A Propos
        </a>
        <a className="navLink" href="/">
          Accueil
        </a>
      </div>
    );
  }
}
export default NavBar;
