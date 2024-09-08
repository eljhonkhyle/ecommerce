import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { Link } from "react-scroll";
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
            <Link
              to="#home"
              smooth={true}
              duration={500}
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ? "nav-active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#about"
              smooth={true}
              duration={500}
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "nav-active" : ""}
            >
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#product"
              smooth={true}
              duration={500}
              onClick={() => setActiveNav("#product")}
              className={activeNav === "#product" ? "nav-active" : ""}
            >
              Product
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="#contact"
              smooth={true}
              duration={500}
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "nav-active" : ""}
            >
              Contact
            </Link>
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
