import React from "react";
import "../CSS/Card.css";
import "../CSS/Info.css";
import headshot from "../Images/Headshot.jpg";
import linkedinLogo from "../Images/linkedin.png";

function showSnackbar() {
  const x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

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
          className="email-but"
          onClick={() => {
            navigator.clipboard.writeText("ianfund117@gmail.com");
            showSnackbar();
          }}
        >
          Left
        </button>
        <a href="https://www.linkedin.com/in/ian-fund/" target="_blank">
          <button className="linked-butt">
            <img id="linkedin-logo" src={linkedinLogo} alt="Linkedin Logo" />
            Linkedin
          </button>
        </a>
      </div>
      <div id="snackbar">Email address copied to clipboard!</div>
    </div>
  );
}
