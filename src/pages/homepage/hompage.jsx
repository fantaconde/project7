import React from "react";
import KasaCard from "../../components/card/card";
import LandingCard from "../../components/landingcard/landingcard";
import properties from "../../logements.json";
import './homepage.css'

export default function Home() {
  return (
    <div className="home">
      <LandingCard />

      <div className="homeProperties">
        {properties.map((property) => (
          <KasaCard
            key={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
}
