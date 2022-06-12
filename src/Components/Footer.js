import React from "react";
import "../CSS/Footer.css";
import githubLogo from "../Images/githubLogo.png";

export default function Footer() {
  return (
    <div className="footer-section">
      <a
        className="gitHubLogo"
        href="https://github.com/ian-fund/"
        target="_blank"
      >
        <img id="githubLogo" src={githubLogo} alt="GitHub Logo" />
      </a>
    </div>
  );
}
