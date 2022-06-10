import React from "react";
import "../CSS/Card.css";
import "../CSS/Info.css";
import headshot from "../Images/Headshot.jpg";
import Popup from "reactjs-popup";

const Modal = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    <span> Modal content </span>
  </Popup>
);
export default function Info() {
  return (
    <div className="infoSection">
      <img id="headshot" src={headshot} alt="headshmmot" />
      <div id="name-job-section">
        <h1>Ian Fund</h1>
        <h2>Software Developer</h2>
      </div>
      <div id="button-section">
        <button className="button">Left</button>
        <button className="button">Right</button>
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
          {" "}
          <span> Modal content </span>{" "}
        </Popup>
      </div>
    </div>
  );
}
