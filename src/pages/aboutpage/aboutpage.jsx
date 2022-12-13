//create a page for the homepage
//using the header and footer components

// Path: src/pages/homepage/hompage.jsx

import React from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div>
        <h1>About</h1>
      <Header />
      <Footer />
    </div>
  );
}
