import React from "react";
import "../CSS/Card.css";
import "../CSS/Info.css";
import headshot from "../Images/Headshot.jpg";
import Popup from "reactjs-popup";

this.state = {
  message: "",
};

const handleEvent = (event) => {
  if (event.type === "mousedown") {
    this.setState({ message: "Copied to clipboard!" });
  }
};
export default function Info() {
  return (
    <div className="infoSection">
      <img id="headshot" src={headshot} alt="headshmmot" />
      <div id="name-job-section">
        <h1>Ian Fund</h1>
        <h2>Software Developer</h2>
      </div>
      <div id="button-section">
        <button
          className="button"
          onClick={() => {
            navigator.clipboard.writeText("ianfund117@gmail.com");
          }}
          onMouseDown={this.handleEvent}
        >
          Left
        </button>
        <a
          className="button"
          href="https://www.linkedin.com/in/ian-fund/"
          target="_blank"
        >
          <button>Right</button>
        </a>
      </div>
    </div>
  );
}
