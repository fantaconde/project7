import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/hompage";
import NavBar from "./components/navbar/navbar";
import About from "./pages/aboutpage/aboutpage";
import ErrorPage from "./pages/errorpage/error";
import PropertyDetails from "./pages/propertyDetails/propertyDetails";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Appears in all the pages */}
      <NavBar />
      <Routes>
        {/* Route to Hmepage */}
        <Route path="/" element={<Home />} />
        {/* Route to about */}
        <Route path="/about" element={<About />} />
        {/* Route to error */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* Route to property details */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
