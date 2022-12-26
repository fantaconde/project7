import * as React from "react";
import "./landingcard.css";

export default function LandingCard({ title, image }) {
  return (
    <div className="landingcard"
     style = {{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
     }}
    >
      <div className="landcardTitle">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
