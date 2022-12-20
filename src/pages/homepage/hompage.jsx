import React from "react";
import KasaCard from "../../components/card/card";
import LandingCard from "../../components/landingcard/landingcard";
// import NavBar from "../../components/navbar/navbar";
// import Footer from "../../components/footer/footer";
// import "./homepage.css";

export default function Home() {
  return (
    <div className="home">
      {/* <NavBar /> */}
      <LandingCard />
      <KasaCard />
      {/* <Footer /> */}
    </div>
  );
}