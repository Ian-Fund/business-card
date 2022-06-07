import React from "react";
import About from "./Components/About";
import Info from "./Components/Info";

export default function Card() {
  return (
    <div className="container">
      <Info />
      <About />
    </div>
  );
}
