import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/hompage";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* The header component */}
      <NavBar />
      {/* The Related Urls */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    {/* The footer component */}
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
