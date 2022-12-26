import * as React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function KasaCard({ title, cover, id }) {
  return (
    <div>
      <figure className="card">
        <img src={cover} alt="A beautiful landscape" />
        <figcaption>
          <Link to={`/property/${id}`}>{title}</Link>
        </figcaption>
      </figure>
    </div>
  );
}
