import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/hompage";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./pages/aboutpage/aboutpage";
import ErrorPage from "./pages/errorpage/error";
import PropertyDetails from "./pages/propertyDetails/propertyDetails";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/property/:key" element={<PropertyDetails />} />
      </Routes>
    </Router>
    {/* The footer component */}
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
