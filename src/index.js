import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/index.scss";
import NavBar from "./Components/NavBar/NavBar.js";
import Footer from "./Components/Footer/Footer.js";

ReactDOM.render(
  <div className="main-container">
    <NavBar />
    <Footer />
  </div>,
  document.getElementById("root")
);
