import * as React from "react";
import Card from "@mui/material/Card";
import "./card.css";

export default function KasaCard({title, cover}) {
  return (
    <Card className="card" sx={{ maxWidth: 345 }} >
      {/* Display an image */}
      <img
        src={cover}
        alt="A beautiful landscape"
      ></img>
      {/* Display link */}
      <div>
        <a href="/">{title}</a>
      </div>
    </Card>
  );
}
