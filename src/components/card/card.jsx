import * as React from "react";
import Card from "@mui/material/Card";
import "./card.css";
import { Link } from "react-router-dom";

export default function KasaCard({title, cover, id}) {
  return (
    <Card className="card" sx={{ maxWidth: 345 }} >
      {/* Display an image */}
      <img
        src={cover}
        alt="A beautiful landscape"
      ></img>
      {/* Display link */}
      <div>
        {/* <a href="/property/:key">{title}</a> */}
        <Link to={`/property/${id}`}>{title}</Link>
        
      </div>
    </Card>
  );
}
