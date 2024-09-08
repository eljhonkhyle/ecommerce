import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">EKB COFFEE</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-link">
            <a
              href="#home"
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ? "nav-active" : ""}
            >
              Home
            </a>
          </li>
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#product">Product</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-login-container">
        <div className="search-bar-container">
          <input className="search-bar" type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
        <button className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
