import React from "react";
import KasaCard from "../../components/card/card";
import LandingCard from "../../components/landingcard/landingcard";
import NavBar from "../../components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingCard />
      <KasaCard />
    </div>
  );
}