import React from "react";
import KasaCard from "../../components/card/card";
import LandingCard from "../../components/landingcard/landingcard";
import properties from "../../logements.json";
import './homepage.css'
import image from '../../assets/landing-banner.png'
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="home">
      <LandingCard title="Chez vous, partout et ailleurs" image={image} />
      <div className="homeProperties">
        {properties.map((property) => (
          <KasaCard
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
