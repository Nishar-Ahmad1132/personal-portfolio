// src/components/Header.js
import React, { useEffect, useState } from "react";
import hero_img from "../assets/Aa8.jpg";
import "./Header.css";

const fileUrl = "/Nishar_Ahmad_Resume.pdf";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "MERN Stack and Flutter Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const openFileInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <header className="header">
      <div className="header-cont">
        <div className="header-content">
          <h1>Hi, I'm Nishar Ahmad</h1>
          <div className="header-intro-wrapper">
            <div className="header-intro">{text}</div>
          </div>
          <p className="header-description">
            I craft beautiful, responsive web and mobile applications that bring
            ideas to life.
          </p>
          <div className="header-buttons">
            <button
              className="cta-btn"
              onClick={() => openFileInNewTab(fileUrl)}
            >
              Download Resume
            </button>
            
          </div>
        </div>
        <div className="header-image">
          <img src={hero_img} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
