import * as React from "react";
import Card from "@mui/material/Card";
import "./landingcard.css";

export default function LandingCard({title, image}) {
  return (
    <Card className="landingcard" 
     style = {{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
     }}
    >
      <div className="landcardTitle">
        <h3>{title}</h3>
      </div>
    </Card>
  );
}
