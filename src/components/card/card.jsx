import * as React from "react";
import Card from "@mui/material/Card";
import "./card.css";

export default function KasaCard() {
  return (
    <Card className="card" sx={{ maxWidth: 345 }} >
      {/* Display an image */}
      <img
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        alt="A beautiful landscape"
      ></img>
      {/* Display link */}
      <div>
        <a href="/">Titre de la location</a>
      </div>
    </Card>
  );
}
