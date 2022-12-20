import React, { Component } from "react";
import "./error.css";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a>Retourner sur la page d’accueil</a>
      </div>
    );
  }
}

export default Error;