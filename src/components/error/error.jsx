import React from "react";
import "./error.css";

function Error() {
    return (
      <div className="error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    );
  }

export default Error;