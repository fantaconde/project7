import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/hompage";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* The header component */}
      {/* <Header /> */}
      {/* The Related Urls */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    {/* The footer component */}
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
