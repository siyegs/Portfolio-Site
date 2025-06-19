import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import "./styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="left-part">
            <div className="logo">
              <a href="/">
                <h1 style={{ fontFamily: "Special Gothic Expanded One", fontSize: "clamp(20px, 2vw, 23px)" }}>ISK</h1>
              </a>
            </div>
          {/* </div> */}

          {/* <div className="right-part"> */}
            <ul>
              <li className="language-switch">
                <a href="/fr/">FR</a>
              </li>
              <li className="theme-switch-btn">
                <FiSun />
              </li>
              <li>
                <button
                  className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
                  aria-label="Open menu"
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
