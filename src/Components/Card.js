import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interests from "./Interests";
import "../CSS/Card.css";

export default function Card() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
