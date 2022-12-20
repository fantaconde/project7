import React, { Component } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
        />
        <a className="navLink" href="/">ACCUEIL</a>
        <a className="navLink" href="/"> A PROPOS</a>
      </div>
    );
  }
}

export default NavBar;